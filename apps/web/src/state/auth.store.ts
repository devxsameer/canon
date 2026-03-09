import { create } from 'zustand';

interface User {
  id: string;
  email: string;
  name: string;
  avatarUrl?: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: true, // Start loading to check session
  login: (user) => set({ user, isAuthenticated: true, isLoading: false }),
  logout: () => set({ user: null, isAuthenticated: false, isLoading: false }),
}));
