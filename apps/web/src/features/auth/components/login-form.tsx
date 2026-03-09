'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { H3, MutedText } from '@/components/ui/typography';
import { toast } from 'sonner';
import { useAuthStore } from '@/state/auth.store';
import { useRouter } from 'next/navigation';

// Local schema for now, as it's not in shared schemas yet
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type LoginValues = z.infer<typeof loginSchema>;

export function LoginForm() {
  const [isLoading, setIsLoading] = React.useState(false);
  const login = useAuthStore((state) => state.login);
  const router = useRouter();

  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(data: LoginValues) {
    setIsLoading(true);
    try {
      // Mock login for now
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Simulate successful login
      login({
        id: '1',
        email: data.email,
        name: 'Demo User',
      });

      toast.success('Welcome back');
      router.push('/dashboard');
    } catch {
      toast.error('Invalid credentials');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full max-w-sm space-y-6">
      <div className="space-y-2 text-center">
        <H3>Welcome back</H3>
        <MutedText>Enter your credentials to access the workspace.</MutedText>
      </div>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="name@example.com"
            type="email"
            disabled={isLoading}
            {...form.register('email')}
          />
          {form.formState.errors.email && (
            <p className="text-sm text-destructive">
              {form.formState.errors.email.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
          </div>
          <Input
            id="password"
            type="password"
            disabled={isLoading}
            {...form.register('password')}
          />
          {form.formState.errors.password && (
            <p className="text-sm text-destructive">
              {form.formState.errors.password.message}
            </p>
          )}
        </div>
        <Button className="w-full" type="submit" isLoading={isLoading}>
          Sign In
        </Button>
      </form>
    </div>
  );
}
