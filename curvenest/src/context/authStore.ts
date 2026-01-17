import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, _get) => ({
      isAuthenticated: false,
      user: null,

      login: async (email: string, password: string): Promise<boolean> => {
        // Mock authentication - in real app, this would call an API
        return new Promise((resolve) => {
          setTimeout(() => {
            if (email === "demo@curvenest.com" && password === "password") {
              const user = {
                id: "1",
                name: "Demo User",
                email: "demo@curvenest.com",
              };
              set({ isAuthenticated: true, user });
              resolve(true);
            } else {
              resolve(false);
            }
          }, 1000);
        });
      },

      signup: async (
        name: string,
        email: string,
        _password: string,
      ): Promise<boolean> => {
        // Mock signup - in real app, this would call an API
        return new Promise((resolve) => {
          setTimeout(() => {
            const user = {
              id: Date.now().toString(),
              name,
              email,
            };
            set({ isAuthenticated: true, user });
            resolve(true);
          }, 1500);
        });
      },

      logout: () => {
        set({ isAuthenticated: false, user: null });
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        isAuthenticated: state.isAuthenticated,
        user: state.user,
      }),
    },
  ),
);
