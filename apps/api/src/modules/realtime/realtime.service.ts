import { Injectable } from '@nestjs/common';
import { applyUpdate, createDocument } from '@repo/crdt';
import { WebSocket } from 'ws';
import * as Y from 'yjs';

import { RoomManager } from './managers/room-manager.js';

@Injectable()
export class RealtimeService {
  private rooms = new RoomManager<WebSocket>();
  private docs = new Map<string, Y.Doc>();

  getOrCreateDoc(docId: string) {
    if (!this.docs.has(docId)) {
      const { doc } = createDocument(docId);
      this.docs.set(docId, doc);
    }
    return this.docs.get(docId)!;
  }

  join(docId: string, client: WebSocket) {
    this.rooms.join(docId, client);
  }

  leave(client: WebSocket) {
    this.rooms.removeClientFromAll(client);
  }

  handleMessage(docId: string, client: WebSocket, data: Buffer) {
    const msg = JSON.parse(data.toString());
    const doc = this.getOrCreateDoc(docId);

    if (msg.type === 'sync') {
      const stateVector = new Uint8Array(msg.stateVector);

      const update = Y.encodeStateAsUpdate(doc, stateVector);

      client.send(
        JSON.stringify({
          type: 'sync',
          update: Array.from(update),
        }),
      );

      return;
    }

    if (msg.type === 'update') {
      const update = new Uint8Array(msg.update);

      applyUpdate(doc, update);

      for (const c of this.rooms.getClients(docId)) {
        if (c !== client && c.readyState === WebSocket.OPEN) {
          c.send(
            JSON.stringify({
              type: 'update',
              update: Array.from(update),
            }),
          );
        }
      }
    }
  }

  getInitialState(docId: string) {
    const doc = this.getOrCreateDoc(docId);
    return Y.encodeStateAsUpdate(doc);
  }
}
