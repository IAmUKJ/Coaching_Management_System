import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FiBookOpen, FiCheckCircle, FiBarChart2, FiLogOut, FiMenu } from 'react-icons/fi';
import { useState } from 'react';

const StudentSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/student/login');
  };

  const navItems = [
    { label: 'My Courses', icon: <FiBookOpen />, path: '/student/dashboard' },
    { label: 'My Attendance', icon: <FiCheckCircle />, path: '/student/myattendance' },
  ];

  return (
    <div className="flex">
      {/* Sidebar for desktop */}
      <div className="hidden md:flex flex-col bg-white w-64 h-screen shadow-lg p-4">
        <h2 className="text-xl font-bold mb-6">Student Portal</h2>
        <nav className="flex flex-col gap-4">
          {navItems.map(item => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md font-medium transition ${
                  isActive ? 'bg-blue-100 text-blue-600' : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2 text-red-500 rounded-md hover:bg-red-100 transition font-medium"
          >
            <FiLogOut />
            Logout
          </button>
        </nav>
      </div>

      {/* Sidebar Toggle Button for mobile */}
      <div className="md:hidden p-4">
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 text-2xl">
          <FiMenu />
        </button>
      </div>

      {/* Sidebar for mobile */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 p-4 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Student Portal</h2>
            <button onClick={() => setIsOpen(false)} className="text-xl">×</button>
          </div>
          <nav className="flex flex-col gap-4">
            {navItems.map(item => (
              <NavLink
                key={item.label}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-md font-medium transition ${
                    isActive ? 'bg-blue-100 text-blue-600' : 'text-gray-700 hover:bg-gray-100'
                  }`
                }
              >
                {item.icon}
                {item.label}
              </NavLink>
            ))}
            <button
              onClick={() => {
                handleLogout();
                setIsOpen(false);
              }}
              className="flex items-center gap-3 px-3 py-2 text-red-500 rounded-md hover:bg-red-100 transition font-medium"
            >
              <FiLogOut />
              Logout
            </button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default StudentSidebar;
