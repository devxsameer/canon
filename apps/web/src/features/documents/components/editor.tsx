'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Collaboration from '@tiptap/extension-collaboration';

import { createYDoc } from '@/lib/crdt-client';
import { useEffect, useMemo } from 'react';
import { connectWS } from '@/lib/websocket';
import { EditorToolbar } from './editor-toolbar';

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

  return (
    <>
      <EditorToolbar />
      <div className="flex-1 overflow-y-auto py-4 pb-12">
        <div className="mx-auto w-full max-w-200">
          <div className="bg-white shadow-md border border-border rounded-sm px-16 py-12 min-h-screen cursor-text">
            <EditorContent editor={editor} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Editor;
