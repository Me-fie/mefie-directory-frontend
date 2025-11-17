// context/auth-context.tsx
"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  name: string;
  role: string;
  image?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (token: string) => void;
  logout: () => void;
  refetchUser: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUserProfile = async (token: string) => {
    console.log('🔄 fetchUserProfile called with token:', token ? 'exists' : 'missing');
    
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://me-fie.co.uk";
      console.log('📡 Making API call to:', `${API_URL}/api/user`);
      
      const res = await fetch(`${API_URL}/api/user`, {
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      });
      
      console.log('📨 API Response status:', res.status);
      
      if (res.ok) {
        const data = await res.json();
        console.log('✅ User data received:', data);
        
        const raw = data?.user ?? data?.data ?? data;
        const mappedUser: User = {
          name: raw?.name ||
                `${raw?.first_name ?? ""} ${raw?.last_name ?? ""}`.trim() ||
                "User",
          role: raw?.role || "User",
          image: raw?.image || raw?.avatar || undefined,
        };
        
        console.log('👤 Mapped user:', mappedUser);
        setUser(mappedUser);
      } else {
        console.log('❌ API response not OK, clearing token');
        localStorage.removeItem('authToken');
        setUser(null);
      }
    } catch (err) {
      console.error('🚨 Failed to fetch user:', err);
      localStorage.removeItem('authToken');
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // Check for existing token on mount
  useEffect(() => {
    console.log('🔍 AuthProvider mounting, checking for token...');
    const token = localStorage.getItem('authToken');
    console.log('🔑 Token found:', token ? 'yes' : 'no');
    
    if (token) {
      fetchUserProfile(token);
    } else {
      console.log('🔑 No token found, setting loading to false');
      setLoading(false);
    }
  }, []);

  const login = async (token: string) => {
    console.log('🔑 Login called with token:', token);
    localStorage.setItem('authToken', token);
    console.log('💾 Token saved to localStorage');
    await fetchUserProfile(token);
  };

  const logout = () => {
    console.log('🚪 Logout called');
    localStorage.removeItem('authToken');
    setUser(null);
  };

  const refetchUser = () => {
    console.log('🔄 refetchUser called');
    const token = localStorage.getItem('authToken');
    if (token) {
      fetchUserProfile(token);
    }
  };

  // Debug user state changes
  useEffect(() => {
    console.log('👤 User state changed:', user);
  }, [user]);

  // Debug loading state changes
  useEffect(() => {
    console.log('⏳ Loading state changed:', loading);
  }, [loading]);

  return (
    <AuthContext.Provider value={{ 
      user, 
      loading, 
      login, 
      logout, 
      refetchUser 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}