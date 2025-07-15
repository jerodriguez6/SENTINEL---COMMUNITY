import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Type definitions
interface User {
  type: 'wallet' | 'email';
  address?: string;
  displayName: string;
  email?: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  walletAddress: string;
  isWalletConnected: boolean;
  login: (userData: User) => void;
  logout: () => void;
  connectWallet: () => Promise<string>;
}

interface AuthProviderProps {
  children: ReactNode;
}

// Extend Window interface to include ethereum
declare global {
  interface Window {
    ethereum?: any;
  }
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [walletAddress, setWalletAddress] = useState<string>('');
  const [isWalletConnected, setIsWalletConnected] = useState<boolean>(false);

  // Check for existing wallet connection on load
  useEffect(() => {
    const checkWalletConnection = async () => {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({
            method: 'eth_accounts'
          });
          
          if (accounts.length > 0) {
            setWalletAddress(accounts[0]);
            setIsWalletConnected(true);
            setIsAuthenticated(true);
            setUser({
              type: 'wallet',
              address: accounts[0],
              displayName: `${accounts[0].slice(0, 6)}...${accounts[0].slice(-4)}`
            });
          }
        } catch (error) {
          console.error('Error checking wallet connection:', error);
        }
      }
    };

    checkWalletConnection();
  }, []);

  const login = (userData: User) => {
    setIsAuthenticated(true);
    setUser(userData);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setWalletAddress('');
    setIsWalletConnected(false);
  };

  const connectWallet = async (): Promise<string> => {
    if (!window.ethereum) {
      throw new Error('MetaMask no está instalado');
    }

    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      if (accounts.length > 0) {
        const address = accounts[0];
        setWalletAddress(address);
        setIsWalletConnected(true);
        setIsAuthenticated(true);
        setUser({
          type: 'wallet',
          address: address,
          displayName: `${address.slice(0, 6)}...${address.slice(-4)}`
        });
        return address;
      }
      throw new Error('No accounts found');
    } catch (error) {
      console.error('Error connecting wallet:', error);
      throw error;
    }
  };

  const value: AuthContextType = {
    isAuthenticated,
    user,
    walletAddress,
    isWalletConnected,
    login,
    logout,
    connectWallet
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;