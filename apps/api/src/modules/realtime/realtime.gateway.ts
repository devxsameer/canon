import { IncomingMessage } from 'node:http';

import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
} from '@nestjs/websockets';
import { WebSocket } from 'ws';

import { RealtimeService } from './realtime.service.js';

@WebSocketGateway()
export class RealtimeGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(private readonly realtime: RealtimeService) {}

  handleConnection(client: WebSocket, req: IncomingMessage) {
    console.log('WS CONNECT ATTEMPT');

    try {
      if (!req.url) throw new Error('No URL');

      const url = new URL(req.url, 'http://localhost');
      const docId = url.searchParams.get('docId');

      console.log('DocId:', docId);

      if (!docId) {
        console.log('No docId → closing');
        client.close();
        return;
      }

      console.log('Connected successfully');

      // Join room
      this.realtime.join(docId, client);

      // Handle Messages
      client.on('message', (data: Buffer) => {
        this.realtime.handleMessage(docId, client, data);
      });

      client.on('close', () => {
        this.realtime.leave(client);
      });
    } catch (err) {
      console.error('WS ERROR:', err);
      client.close();
    }
  }

  handleDisconnect(client: WebSocket) {
    this.realtime.leave(client);
  }
}
