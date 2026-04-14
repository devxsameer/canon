'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Collaboration from '@tiptap/extension-collaboration';

import { createYDoc } from '@/lib/crdt-client';
import { useEffect, useMemo } from 'react';
import { connectWS } from '@/lib/websocket';

function Editor({ documentId }: { documentId: string }) {
  const doc = useMemo(() => createYDoc(), []);

  useEffect(() => {
    const ws = connectWS(doc, documentId);

    return () => ws.close();
  }, [documentId, doc]);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Collaboration.configure({
        document: doc,
      }),
    ],
    immediatelyRender: false,
  });

  return <EditorContent editor={editor} />;
}

export default Editor;
