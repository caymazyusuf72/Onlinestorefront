'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { Loader2 } from 'lucide-react';

// This is a mock user type. In a real Firebase app, you'd import the User type from 'firebase/auth'.
interface MockUser {
    displayName: string | null;
    email: string | null;
    photoURL: string | null;
}

interface AuthContextType {
  user: MockUser | null;
  loading: boolean;
  login: (user: MockUser) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<MockUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, you'd use onAuthStateChanged from Firebase.
    // Here, we'll simulate checking for a user session from localStorage.
    try {
        const storedUser = localStorage.getItem('mockUser');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    } catch (error) {
        // This can happen in environments where localStorage is not available.
        console.error("Failed to access localStorage:", error);
    }
    setLoading(false);
  }, []);
  
  const login = (userData: MockUser) => {
    setUser(userData);
    try {
      localStorage.setItem('mockUser', JSON.stringify(userData));
    } catch (error) {
       console.error("Failed to access localStorage:", error);
    }
  };

  const logout = () => {
    setUser(null);
    try {
        localStorage.removeItem('mockUser');
    } catch (error) {
        console.error("Failed to access localStorage:", error);
    }
  };


  const value = { user, loading, login, logout };

  if (loading) {
    return (
        <div className="flex items-center justify-center h-screen">
            <Loader2 className="h-10 w-10 animate-spin" />
        </div>
    )
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
