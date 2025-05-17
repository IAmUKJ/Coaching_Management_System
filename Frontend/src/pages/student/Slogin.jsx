import { useState } from 'react';
import axios from '../../utils/axiosInstance';
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Slogin = () => {
  const [emailOrRoll, setEmailOrRoll] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/auth/login', { emailOrRoll, password });
      login(res.data.token);
      navigate('/dashboard');
    } catch (err) {
      alert(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 shadow-md rounded-md space-y-4 w-full max-w-sm">
        <h2 className="text-xl font-semibold text-center">Student Login</h2>
        <input
          type="text"
          placeholder="Email or Roll Number"
          className="w-full p-2 border"
          value={emailOrRoll}
          onChange={(e) => setEmailOrRoll(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
          Login
        </button>
        {/* 🔗 Sign Up Link */}
        <p className="mt-4 text-center text-sm">
          Don't have an account?{' '}
          <Link
            to="/student/register"
            className="text-blue-600 hover:underline font-medium"
          >
            Sign Up
          </Link>
        </p>
        <p className="text-center">
          <a href="/forgot-password" className="text-sm text-blue-500 hover:underline">Forgot Password?</a>
        </p>
      </form>
    </div>
  );
};

export default Slogin;
