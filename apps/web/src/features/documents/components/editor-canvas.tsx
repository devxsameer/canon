'use client';

import { useEditorStore } from '@/state/editor.store';

export function EditorCanvas() {
  const { setContent } = useEditorStore();

  return (
    <div className="mx-auto max-w-212.5 px-8 py-12 md:px-12 md:py-16">
      <div
        className="min-h-[calc(100vh-200px)] w-full outline-none focus:outline-none prose prose-zinc dark:prose-invert max-w-none"
        contentEditable
        suppressContentEditableWarning
        onInput={(e) => setContent(e.currentTarget.textContent || '')}
      >
        <h1 className="text-4xl font-bold tracking-tight mb-4">Untitled Document</h1>
        <p className="text-lg text-muted-foreground">Start typing...</p>
      </div>
    </div>
  );
}
