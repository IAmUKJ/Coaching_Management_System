// components/Sidebar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`fixed md:relative top-0 left-0 z-20 w-64 bg-indigo-800 text-white p-6 space-y-4 transform transition-transform duration-300 ease-in-out 
      h-screen md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Teacher Panel</h2>
        {/* Close Icon on Mobile */}
        <button className="md:hidden" onClick={onClose}>
          <X className="w-6 h-6" />
        </button>
      </div>

      <nav className="space-y-2">
        <Link to="/teacher/dashboard" className="block hover:bg-indigo-700 p-2 rounded">
          Dashboard
        </Link>
        <Link to="/teacher/admissions" className="block hover:bg-indigo-700 p-2 rounded">
          Admissions
        </Link>
        <Link to="/teacher/admitted-students" className="block hover:bg-indigo-700 p-2 rounded">
          Students registered
        </Link>
        <Link to="/teacher/attendance" className="block hover:bg-indigo-700 p-2 rounded">
          Attendance
        </Link>
        <Link to="/teacher/courses" className="block hover:bg-indigo-700 p-2 rounded">
          Courses
        </Link>
        <Link to="/teacher/upload-material" className="block hover:bg-indigo-700 p-2 rounded">
          Upload Material
        </Link>
        <button
          onClick={() => navigate('/teacher/login')}
          className="w-full text-left text-red-300 hover:bg-red-600 hover:text-white p-2 rounded"
        >
          Logout
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
