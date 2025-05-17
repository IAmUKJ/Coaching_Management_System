import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const StudentLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // ✅ Auto-redirect if already logged in in the same tab
  useEffect(() => {
    if (sessionStorage.getItem('studentToken')) {
      navigate('/student/dashboard');
    }
  }, [navigate]);

  const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post('https://coaching-management-system-9w2s.onrender.com/api/authRoutes/login', { email, password });

    const { token, student } = res.data;

    sessionStorage.setItem('studentToken', token);
    sessionStorage.setItem('studentData', JSON.stringify(student));
    sessionStorage.setItem('studentId', student._id);  // <-- store studentId separately

    navigate('/student/dashboard');
  }catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Student Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 p-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            className="w-full border border-gray-300 p-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Sign In
        </button>

        <div className="text-center mt-4">
          <a href="/student-forgot-password" className="text-blue-600 hover:underline text-sm">
            Forgot password?
          </a>
        </div>
      </form>
    </div>
  );
};

export default StudentLogin;
