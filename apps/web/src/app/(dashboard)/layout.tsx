import { Sidebar } from '@/components/layout/sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-background">
      <div className="hidden border-r md:block">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
        <main className="flex-1 overflow-auto p-8 pt-6">
          {children}
        </main>
      </div>
    </div>
  );
}
