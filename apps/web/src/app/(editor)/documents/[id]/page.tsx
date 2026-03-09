import { EditorToolbar } from '@/features/documents/components/editor-toolbar';
import { EditorCanvas } from '@/features/documents/components/editor-canvas';

export default function DocumentPage({}: { params: { id: string } }) {
  return (
    <div className="flex h-full flex-col">
      <EditorToolbar />
      <div className="flex-1 overflow-auto bg-muted/10">
        <div className="min-h-full bg-background shadow-sm pb-20">
          <EditorCanvas />
        </div>
      </div>
    </div>
  );
}
