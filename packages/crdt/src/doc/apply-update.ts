import * as Y from 'yjs';

export function applyUpdate(doc: Y.Doc, update: Uint8Array) {
  Y.applyUpdate(doc, update);
}
