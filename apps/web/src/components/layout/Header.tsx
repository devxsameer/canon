import Link from 'next/link';
export function Header() {
  return (
    <header className="fixed top-0 w-full border-b border-border bg-background/80 backdrop-blur-md z-50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="font-serif text-2xl font-bold tracking-tight text-primary"
          >
            Canon
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/features"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Features
          </Link>
          <Link
            href="/architecture"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Architecture
          </Link>
          <Link
            href="/docs"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Docs
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/register"
            className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
