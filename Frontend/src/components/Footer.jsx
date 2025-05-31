import React from 'react'
import { Link } from 'react-router-dom';
import { GraduationCap, Phone, Mail, MapPin, Star } from 'lucide-react';
const Footer = () => {
  return (
    <div>
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-4 gap-8">
                {/* Company Info */}
                <div className="md:col-span-2">
                    <div className="flex items-center space-x-3 mb-6">
                    <div className="p-3 bg-blue-600 rounded-xl">
                        <GraduationCap className="h-8 w-8 text-white" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white">Bright Future</h3>
                        <p className="text-gray-400">Coaching Institute</p>
                    </div>
                    </div>
                    <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                    Empowering students to achieve academic excellence with expert faculty, personalized mentorship, and proven results since 2009.
                    </p>
                    <div className="flex space-x-4">
                    <a href="Contact" className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-all duration-300 transform hover:scale-110">
                        <Phone className="h-5 w-5" />
                    </a>
                    <a href="Contact" className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-all duration-300 transform hover:scale-110">
                        <Mail className="h-5 w-5" />
                    </a>
                    <a href="Contact" className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-all duration-300 transform hover:scale-110">
                        <MapPin className="h-5 w-5" />
                    </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                    <div className="space-y-3">
                    <Link to="/" className="block hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform">
                        Home
                    </Link>
                    <Link to="/about" className="block hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform">
                        About
                    </Link>
                    <Link to="/courses" className="block hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform">
                        Courses
                    </Link>
                    <Link tp="/contact" className="block hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform">
                        Contact
                    </Link>
                    <Link to="/student/dashboard" className="block hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform">
                        Student Portal
                    </Link>
                    <Link to="/teacher/login" className="block hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform">
                        Teacher Portal
                    </Link>
                    </div>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Visit Us</h4>
                    <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                        <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                        <div>
                        <p className="text-gray-400">123 Education Street</p>
                        <p className="text-gray-400">New Delhi, India 110001</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-blue-400" />
                        <p className="text-gray-400">+91 83688 85301</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-blue-400" />
                        <p className="text-gray-400">demoweb811@gmail.com</p>
                    </div>
                    </div>
                </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center">
                <p className="text-gray-400">
                    &copy; 2025 Bright Future Coaching Institute. All rights reserved. | Designed with ❤️ for Student Success
                </p>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer;