// RequireStudentLogin.jsx
import { Navigate } from 'react-router-dom';

const RequireStudentLogin = ({ children }) => {
  const isLoggedIn = sessionStorage.getItem('studentToken');
  return isLoggedIn ? children : <Navigate to="/student/login" />;
};

export default RequireStudentLogin;
