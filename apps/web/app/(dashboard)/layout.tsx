import Link from 'next/link';
import { Users, FileText, Settings, LogOut, LayoutDashboard, Menu } from 'lucide-react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border hidden md:flex flex-col bg-card/50">
        <div className="h-16 px-6 flex items-center border-b border-border">
          <Link
            href="/dashboard"
            className="font-serif text-xl font-bold tracking-tight text-primary"
          >
            Canon
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          <DashboardLink
            href="/dashboard"
            icon={<LayoutDashboard />}
            label="Overview"
            active
          />
          <DashboardLink href="/posts" icon={<FileText />} label="Documents" />
          <DashboardLink href="/users" icon={<Users />} label="Team" />
          <DashboardLink href="/settings" icon={<Settings />} label="Settings" />
        </nav>

        <div className="p-4 border-t border-border">
          <button className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary">
            <LogOut className="h-4 w-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b border-border px-6 flex items-center justify-between bg-background/50 backdrop-blur-sm sticky top-0 z-10">
          <div className="md:hidden">
            {/* Mobile toggle placeholder */}
            <Menu className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="flex-1 px-4">{/* Breadcrumb or Search placeholder */}</div>
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-xs font-medium border border-border">
              JD
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-6 lg:p-10">
          <div className="max-w-6xl mx-auto space-y-8">{children}</div>
        </main>
      </div>
    </div>
  );
}

function DashboardLink({
  href,
  icon,
  label,
  active,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`
        flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-all
        ${
          active
            ? 'bg-primary/10 text-primary shadow-sm'
            : 'text-muted-foreground hover:bg-secondary hover:text-primary'
        }
      `}
    >
      {/* Clone element to force size if needed, but lucid icons are usually sized by parent or props */}
      <span className="h-4 w-4">{icon}</span>
      {label}
    </Link>
  );
}
