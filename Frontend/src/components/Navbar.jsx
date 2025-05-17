// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Coaching Institute</h1>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li>
            <Link to="/" className="hover:text-yellow-300">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-yellow-300">About</Link>
          </li>
          <li>
            <Link to="/courses" className="hover:text-yellow-300">Courses</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
          </li>
          <li>
            <Link to="/student/dashboard" className="hover:text-yellow-300">Student Portal</Link>
          </li>
          <li>
            <Link to="/teacher/login" className="hover:text-yellow-300">Teacher Portal</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 px-6 pb-4">
          <ul className="flex flex-col gap-4">
            <li>
              <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-yellow-300 block">Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-yellow-300 block">About</Link>
            </li>
            <li>
              <Link to="/courses" onClick={() => setIsOpen(false)} className="hover:text-yellow-300 block">Courses</Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-yellow-300 block">Contact</Link>
            </li>
            <li>
              <Link to="/student/dashboard" onClick={() => setIsOpen(false)} className="hover:text-yellow-300 block">Student Portal</Link>
            </li>
            <li>
              <Link to="/teacher/login" onClick={() => setIsOpen(false)} className="hover:text-yellow-300 block">Teacher Portal</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
