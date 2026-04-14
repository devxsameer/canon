import Editor from '@/features/documents/components/editor';

export default async function DocumentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="flex h-full flex-col bg-muted/40">
      <Editor documentId={id} />
    </div>
  );
}
