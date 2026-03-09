'use client';

import { 
  FileText, 
  UserPlus, 
  Trash2, 
  Edit, 
  Share 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { MutedText } from '@/components/ui/typography';

const events = [
  {
    id: '1',
    type: 'edit',
    user: 'Alice Smith',
    action: 'edited',
    target: 'Q4 Financial Report',
    timestamp: '2 hours ago',
    icon: Edit,
    iconColor: 'text-blue-500',
  },
  {
    id: '2',
    type: 'share',
    user: 'Bob Jones',
    action: 'shared',
    target: 'Product Roadmap 2024',
    timestamp: '5 hours ago',
    icon: Share,
    iconColor: 'text-green-500',
  },
  {
    id: '3',
    type: 'create',
    user: 'Charlie Brown',
    action: 'created',
    target: 'Engineering Guidelines',
    timestamp: '1 day ago',
    icon: FileText,
    iconColor: 'text-purple-500',
  },
  {
    id: '4',
    type: 'delete',
    user: 'Alice Smith',
    action: 'deleted',
    target: 'Old Draft',
    timestamp: '2 days ago',
    icon: Trash2,
    iconColor: 'text-red-500',
  },
  {
    id: '5',
    type: 'invite',
    user: 'Admin',
    action: 'invited',
    target: 'Dave Wilson',
    timestamp: '3 days ago',
    icon: UserPlus,
    iconColor: 'text-orange-500',
  },
];

export function AuditTimeline() {
  return (
    <div className="relative space-y-8 pl-6 before:absolute before:inset-0 before:ml-2.5 before:h-full before:w-0.5 before:bg-border">
      {events.map((event) => (
        <div key={event.id} className="relative flex items-start gap-4">
          <div className="absolute -left-6 ml-0.5 mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-background ring-4 ring-background">
            <event.icon className={cn('h-3 w-3', event.iconColor)} />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium leading-none">
              <span className="font-semibold">{event.user}</span> {event.action}{' '}
              <span className="font-medium text-foreground">{event.target}</span>
            </p>
            <MutedText className="text-xs">{event.timestamp}</MutedText>
          </div>
        </div>
      ))}
    </div>
  );
}
