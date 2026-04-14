import { EditorToolbar } from '@/features/documents/components/editor-toolbar';
import Editor from '@/features/documents/components/editor';

export default async function DocumentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className="flex h-full flex-col">
      <EditorToolbar />
      <div className="flex-1 max-w-3xl mx-auto w-full mt-10">
        <div className="p-4 border rounded-xl">
          <Editor documentId={id} />
        </div>
      </div>
    </div>
  );
}
