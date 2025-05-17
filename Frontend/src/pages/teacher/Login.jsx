// src/components/LoginPage.jsx
import axios from 'axios'
import React, { useState } from "react";
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const {login} = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle login logic here
    try {
        const response = await axios.post(`https://coaching-management-system-9w2s.onrender.com/api/auth/login`, {email,password});
        if(response.data.success){
            login(response.data.user)
            localStorage.setItem("token", response.data.token)
            if(response.data.user.role === "teacher"){
                navigate('/teacher/dashboard')
            }else{
                navigate('/student/dashboard')
            }
        }
    }
    catch(error){
        if(error.response && !error.response.data.success){
            setError(error.response.data.error)
        }else{
            setError("Server Error")
        }
    }

  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">Welcome Back</h2>
        {error &&  <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              required
              value={email}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              placeholder="you@example.com"
              onChange={(e) => setEmail(e.target.value)}
              aria-required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              value={password}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              aria-required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-semibold transition shadow-md"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-6">
          Don't have an account?{' '}
          <a href="/signup" className="text-indigo-600 hover:underline">
            Sign Up
          </a>
        </p>
    
      </div>
    </div>
  );
};

export default LoginPage;
