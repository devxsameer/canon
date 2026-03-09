import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
  Type,
  Image as ImageIcon,
} from 'lucide-react';

export function EditorToolbar() {
  return (
    <div className="flex items-center justify-center border-b p-2">
      <div className="flex items-center gap-1 rounded-md border bg-background p-1 shadow-sm">
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Type className="h-4 w-4" />
        </Button>
        <Separator orientation="vertical" className="mx-1 h-6" />
        
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Bold className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Italic className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Underline className="h-4 w-4" />
        </Button>
        
        <Separator orientation="vertical" className="mx-1 h-6" />
        
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <AlignLeft className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <AlignCenter className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <AlignRight className="h-4 w-4" />
        </Button>
        
        <Separator orientation="vertical" className="mx-1 h-6" />
        
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <List className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <ListOrdered className="h-4 w-4" />
        </Button>
        
        <Separator orientation="vertical" className="mx-1 h-6" />
        
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <ImageIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
