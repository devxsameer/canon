import { AuditTimeline } from '@/features/audit/components/audit-timeline';
import { H2, MutedText } from '@/components/ui/typography';
import { Separator } from '@/components/ui/separator';

export const metadata = {
  title: 'Audit Log - Canon',
  description: 'View system activity',
};

export default function AuditPage() {
  return (
    <div className="space-y-6 max-w-2xl">
      <div className="space-y-2">
        <H2>Audit Log</H2>
        <MutedText>
          Chronological record of all system events.
        </MutedText>
      </div>
      <Separator />
      <AuditTimeline />
    </div>
  );
}
