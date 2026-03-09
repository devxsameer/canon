'use client';

import { Button } from '@/components/ui/button';
import { ArrowLeft, Share2, MoreHorizontal } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function EditorLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <div className="flex h-screen flex-col bg-background">
      {/* Editor Header */}
      <header className="flex items-center justify-between border-b px-4 py-2">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.back()}
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div className="flex flex-col">
            <span className="text-sm font-medium">Untitled Document</span>
            <span className="text-xs text-muted-foreground">Draft</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-8 gap-2">
            <Share2 className="h-4 w-4" />
            Share
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
          <div className="ml-2 flex -space-x-2">
            {/* Avatar Stack Placeholder */}
            <div className="h-6 w-6 rounded-full border-2 border-background bg-muted" />
            <div className="h-6 w-6 rounded-full border-2 border-background bg-muted" />
          </div>
        </div>
      </header>
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}
