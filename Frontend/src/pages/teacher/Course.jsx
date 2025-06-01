import React, { useEffect, useState } from 'react';
import { FaBookOpen, FaTrash } from 'react-icons/fa';
import Sidebar from '../../components/Sidebar';
const CourseSection = () => {
  const [courses, setCourses] = useState([]);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    validTill: ''
  });

  const fetchCourses = async () => {
    const res = await fetch('https://coaching-management-system-9w2s.onrender.com/api/courses');
    const data = await res.json();
    setCourses(data);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('https://coaching-management-system-9w2s.onrender.com/api/courses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      setFormData({ name: '', description: '', price: '', validTill: '' });
      fetchCourses();
    }
  };

  const handleDelete = async (id) => {
  try {
    const res = await fetch(`https://coaching-management-system-9w2s.onrender.com/api/courses/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'  // optional, but good
      }
    });

    if (!res.ok) {
      throw new Error('Failed to delete');
    }

    const data = await res.json();
    console.log(data); // Should say "Course and related students deleted"
    fetchCourses();    // Refresh course list
  } catch (err) {
    console.error('Error deleting course:', err);
  }
};

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Mobile Hamburger Icon */}
      <div className="md:hidden absolute top-[70px] left-4 z-30">
        <button onClick={() => setSidebarOpen(true)} className="space-y-1.5">
          <div className="w-6 h-0.5 bg-black" />
          <div className="w-6 h-0.5 bg-black" />
          <div className="w-6 h-0.5 bg-black" />
        </button>
      </div>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center gap-2 text-3xl font-bold text-blue-700 mb-6">
        <FaBookOpen className="text-blue-500" />
        <h1>Course Manager</h1>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-xl p-6 mb-10 space-y-5 transition-all">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Course Name"
            required
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price (INR) per month"
            required
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Course Description"
          rows={3}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="date"
          name="validTill"
          value={formData.validTill}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-2 rounded-lg hover:opacity-90 transition"
        >
          Create Course
        </button>
      </form>

      {/* Course Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(course => (
          <div
            key={course._id}
            className="bg-white border shadow-md rounded-xl p-5 flex flex-col justify-between hover:shadow-lg transition"
          >
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-blue-700 mb-1">{course.name}</h2>
              <p className="text-gray-600 mb-2">{course.description}</p>
              <p className="text-sm text-gray-500">
                ₹{course.price} per month  |   Valid Till:{" "}
                <span className="text-black font-medium">
                  {new Date(course.validTill).toLocaleDateString()}
                </span>
              </p>
            </div>
            <button
              onClick={() => handleDelete(course._id)}
              className="mt-2 flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
            >
              <FaTrash /> Delete
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default CourseSection;
