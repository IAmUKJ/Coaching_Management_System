import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, User, BookOpen, ArrowRight, AlertCircle } from 'lucide-react';

const StudentLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // ✅ Auto-redirect if already logged in in the same tab
  useEffect(() => {
    if (sessionStorage.getItem('studentToken')) {
      navigate('/student/dashboard');
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const res = await axios.post('https://coaching-management-system-9w2s.onrender.com/api/authRoutes/login', { email, password });

      const { token, student } = res.data;

      sessionStorage.setItem('studentToken', token);
      sessionStorage.setItem('studentData', JSON.stringify(student));
      sessionStorage.setItem('studentId', student._id);  // <-- store studentId separately

      navigate('/student/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-300 to-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-300 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-700"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-indigo-300 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>

      <div className="min-h-screen flex items-center justify-center px-4 py-8 relative z-10">
        <div className="w-full max-w-md">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-6 shadow-xl">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-600 text-lg">Sign in to your student portal</p>
          </div>

          {/* Login Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8">
            <form onSubmit={handleLogin} className="space-y-6">
              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-2xl p-4 flex items-start gap-3 animate-fadeIn">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-red-700 font-medium">{error}</p>
                </div>
              )}

              {/* Email Field */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    className="w-full pl-12 pr-4 py-4 bg-white/80 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-400"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full pl-12 pr-12 py-4 bg-white/80 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-400"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
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
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-4 px-6 rounded-2xl hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3 shadow-lg"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Signing In...
                  </>
                ) : (
                  <>
                    <User className="w-5 h-5" />
                    Sign In
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              {/* Forgot Password Link */}
              <div className="text-center pt-4">
                <a 
                  href="/student-forgot-password" 
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 text-sm hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
            </form>
          </div>

          {/* Additional Info */}
          <div className="text-center mt-8">
            <p className="text-gray-600 text-sm">
              Don't have an account? 
              <span className="text-blue-600 font-medium ml-1">Contact your administrator</span>
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

export default StudentLogin;