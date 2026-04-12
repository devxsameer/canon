import * as Y from 'yjs';

export function createDocument(docId: string) {
  const doc = new Y.Doc();

  const text = doc.getText('content');

  return {
    id: docId,
    doc,
    text,
  };
}
