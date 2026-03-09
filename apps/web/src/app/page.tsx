import { Header } from '@/components/layout/Header';
import { ArrowRight, ShieldCheck, History, Database } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/10">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight mb-8 text-primary">
                The Authoritative <br />
                <span className="text-muted-foreground">Source of Truth.</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                Canon is a production-grade, real-time collaborative document system
                designed around permission correctness and auditability.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/dashboard"
                  className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-primary px-8 font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105"
                >
                  <span className="mr-2">Start Collaborating</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/docs"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-border bg-transparent px-8 font-medium text-muted-foreground transition-all hover:bg-secondary hover:text-primary"
                >
                  View Architecture
                </Link>
              </div>
            </div>
          </div>

          {/* Decorative Grid - CSS only */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]pointer-events-none" />
        </section>

        {/* Core Pillars */}
        <section className="py-24 border-t border-border/40">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12">
              <FeatureCard
                icon={<ShieldCheck className="h-8 w-8 text-primary" />}
                title="Permission-First"
                description="Every write path is permission-guarded. Access control is explicit, revocable, and historically reconstructable."
              />
              <FeatureCard
                icon={<History className="h-8 w-8 text-primary" />}
                title="Audit-By-Design"
                description="Immutable, append-only audit logs capture every state change. Designed for compliance and historical debugging."
              />
              <FeatureCard
                icon={<Database className="h-8 w-8 text-primary" />}
                title="Canonical Authority"
                description="The server is the final arbiter of state. Clients may be optimistic, but the server remains the source of truth."
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-border/40 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Canon. Built for correctness.</p>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-start gap-4 p-6 rounded-lg border border-border/40 bg-secondary/5 hover:bg-secondary/10 transition-colors">
      <div className="p-3 rounded-md bg-secondary/20">{icon}</div>
      <h3 className="font-serif text-xl font-semibold text-primary">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
