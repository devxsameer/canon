import { LoginForm } from '@/features/auth/components/login-form';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login - Canon',
  description: 'Login to your account',
};

export default function LoginPage() {
  return <LoginForm />;
}
