'use client';

import { FileText, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Mock data
const documents = [
  {
    id: '1',
    title: 'Q4 Financial Report',
    updatedAt: '2 hours ago',
    author: 'Alice Smith',
    status: 'Draft',
  },
  {
    id: '2',
    title: 'Product Roadmap 2024',
    updatedAt: '5 hours ago',
    author: 'Bob Jones',
    status: 'Review',
  },
  {
    id: '3',
    title: 'Engineering Guidelines',
    updatedAt: '1 day ago',
    author: 'Charlie Brown',
    status: 'Published',
  },
];

export function DocumentList() {
  return (
    <div className="space-y-4">
      {documents.map((doc) => (
        <div
          key={doc.id}
          className="flex items-center justify-between rounded-md border p-4 transition-colors hover:bg-muted/50"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-sm border bg-background">
              <FileText className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="grid gap-1">
              <p className="text-sm font-medium leading-none">{doc.title}</p>
              <p className="text-sm text-muted-foreground">
                Updated {doc.updatedAt} by {doc.author}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="font-normal">
              {doc.status}
            </Badge>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
