import * as Y from 'yjs';

type ServerMessage =
  | { type: 'sync'; update: Uint8Array }
  | { type: 'update'; update: Uint8Array };

export function connectWS(doc: Y.Doc, docId: string) {
  const ws = new WebSocket(`ws://localhost:4000/?docId=${docId}`);

  ws.binaryType = 'arraybuffer';

  ws.onopen = () => {
    const stateVector = Y.encodeStateVector(doc);

    ws.send(
      JSON.stringify({
        type: 'sync',
        stateVector: Array.from(stateVector),
      }),
    );
  };

  ws.onmessage = (event) => {
    const msg: ServerMessage = JSON.parse(event.data);
    if (msg.type === 'sync' || msg.type === 'update') {
      const update = new Uint8Array(msg.update);
      Y.applyUpdate(doc, update);
    }
  };

  doc.on('update', (update: Uint8Array) => {
    ws.send(
      JSON.stringify({
        type: 'update',
        update: Array.from(update),
      }),
    );
  });
  return ws;
}
