import { useState, useEffect } from 'react';

// Define the structure of the user object
interface User {
  id: string;
  name: string;
  email: string;
}

// Define the shape of the authentication hook response
interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const useAuth = (): AuthContextType => {
  // State for user data and authentication status
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Fetch token from localStorage (if exists)
  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      // Optionally, validate token here (e.g., through an API call)
      setIsAuthenticated(true);
      // Set user data (fetch user info using token if necessary)
      const storedUser = localStorage.getItem('authUser');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, []);

  // Login function
  const login = async (email: string, password: string) => {
    try {
      // Perform API call to authenticate user
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();

      if (data.token) {
        // Store token and user info in localStorage
        localStorage.setItem('authToken', data.token);
        localStorage.setItem('authUser', JSON.stringify(data.user));

        setUser(data.user);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  // Logout function
  const logout = () => {
    // Clear token and user data from localStorage
    localStorage.removeItem('authToken');
    localStorage.removeItem('authUser');
    setUser(null);
    setIsAuthenticated(false);
  };

  return {
    user,
    login,
    logout,
    isAuthenticated,
  };
};

export default useAuth;
