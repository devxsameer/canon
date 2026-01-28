import Link from 'next/link';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Visual Side */}
      <div className="hidden lg:flex flex-col justify-between bg-zinc-900 border-r border-border/50 p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#000000] z-0" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(60,60,60,0.05)_50%,transparent_75%,transparent_100%)] bg-size-[250%_250%] animate-shine opacity-30 z-10" />

        <div className="relative z-20">
          <Link
            href="/"
            className="font-serif text-3xl font-bold tracking-tight text-white flex items-center gap-2"
          >
            Canon
          </Link>
          <div className="mt-2 h-1 w-12 bg-white/20 rounded-full" />
        </div>

        <div className="relative z-20 max-w-md">
          <h2 className="font-serif text-3xl font-medium text-white mb-6 leading-tight">
            &quot;Correctness is the only luxury that matters in software.&quot;
          </h2>
          <p className="text-zinc-500 text-sm">
            Permission-first, auditable, authoritative state.
          </p>
        </div>
      </div>

      {/* Form Side */}
      <div className="flex items-center justify-center p-6 sm:p-12 bg-background">
        <div className="w-full max-w-md space-y-8">{children}</div>
      </div>
    </div>
  );
}
