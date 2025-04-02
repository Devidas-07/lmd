import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type UserType = 'admin' | 'seller' | null;

interface AuthContextType {
  userType: UserType;
  isAuthenticated: boolean;
  login: (type: UserType) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userType, setUserType] = useState<UserType>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check localStorage or cookies for existing session
    const savedUserType = localStorage.getItem('userType') as UserType;
    const savedAuth = localStorage.getItem('isAuthenticated');
    
    if (savedUserType && savedAuth) {
      setUserType(savedUserType);
      setIsAuthenticated(true);
    }
  }, []);

  const login = (type: UserType) => {
    setUserType(type);
    setIsAuthenticated(true);
    localStorage.setItem('userType', type as string);
    localStorage.setItem('isAuthenticated', 'true');
  };

  const logout = () => {
    setUserType(null);
    setIsAuthenticated(false);
    localStorage.removeItem('userType');
    localStorage.removeItem('isAuthenticated');
  };

  return (
    <AuthContext.Provider value={{ userType, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 