// src/components/LoginPage.jsx
import axios from 'axios'
import React, { useState } from "react";
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, GraduationCap, ArrowRight, AlertCircle, Users } from 'lucide-react';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {login} = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
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
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-blue-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-300 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-300 to-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-700"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-purple-300 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>

      <div className="min-h-screen flex items-center justify-center px-4 py-8 relative z-10">
        <div className="w-full max-w-md">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mb-6 shadow-xl">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-800 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Teacher Portal
            </h1>
            <p className="text-gray-600 text-lg">Welcome back to your dashboard</p>
          </div>

          {/* Login Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-2xl p-4 flex items-start gap-3 animate-fadeIn">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-red-700 font-medium">{error}</p>
                </div>
              )}

              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    className="w-full pl-12 pr-4 py-4 bg-white/80 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 placeholder-gray-400"
                    placeholder="Enter your email address"
                    onChange={(e) => setEmail(e.target.value)}
                    aria-required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    required
                    value={password}
                    className="w-full pl-12 pr-12 py-4 bg-white/80 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 placeholder-gray-400"
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                    aria-required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-2xl hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3 shadow-lg"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Signing In...
                  </>
                ) : (
                  <>
                    <GraduationCap className="w-5 h-5" />
                    Login to Dashboard
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>

            {/* Additional Links */}
            <div className="text-center pt-6 border-t border-gray-100 mt-6">
              <p className="text-sm text-gray-600 mb-3">
                Don't have an account?{' '}
                <a href="/signup" className="text-indigo-600 hover:text-indigo-700 font-medium transition-colors duration-200 hover:underline">
                  Sign Up
                </a>
              </p>
            </div>
          </div>

          {/* Role Info */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/40 p-6 mt-6">
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-5 h-5 text-indigo-600" />
              <h3 className="font-semibold text-gray-800">Multi-Role Access</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              This login portal automatically redirects teachers and admins to the dashboards.
            </p>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default LoginPage;