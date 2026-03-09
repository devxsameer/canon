import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Providers } from './providers';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Canon',
  description: 'A production-grade, real-time collaborative document system.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("dark", "font-sans", inter.variable)}>
      <body
        className={cn(
          inter.variable,
          'antialiased bg-background text-foreground font-sans selection:bg-primary/20',
        )}
      >
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
