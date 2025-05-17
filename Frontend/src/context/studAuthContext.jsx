import { createContext, useContext, useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('studentToken');
    if (token) {
      const decoded = jwtDecode(token);
      setStudent(decoded);
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('studentToken', token);
    const decoded = jwtDecode(token);
    setStudent(decoded);
  };

  const logout = () => {
    localStorage.removeItem('studentToken');
    setStudent(null);
  };

  return (
    <AuthContext.Provider value={{ student, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
