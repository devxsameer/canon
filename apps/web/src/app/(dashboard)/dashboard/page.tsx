import { DocumentList } from '@/features/documents/components/document-list';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { H2, MutedText } from '@/components/ui/typography';
import { Separator } from '@/components/ui/separator';

export const metadata = {
  title: 'Dashboard - Canon',
  description: 'Manage your documents',
};

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <H2>Dashboard</H2>
          <MutedText>Here&apos;s a list of your recent documents.</MutedText>
        </div>
        <div className="flex items-center space-x-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" /> New Document
          </Button>
        </div>
      </div>
      <Separator />
      <DocumentList />
    </div>
  );
}
