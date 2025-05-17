import React, { useState, useEffect } from 'react';
import { getCourses } from '../../../services/courseService';
import { useNavigate } from 'react-router-dom';

const Admission = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  const [rollNumber, setRollNumber] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [course, setCourse] = useState('');
  const [enrollmentDate, setEnrollmentDate] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await getCourses();
      setCourses(res.data);
    };
    fetchCourses();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

     // Simple email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage('Invalid email address.');
      setIsSuccess(false);
      return;
    }
    
    const studentData = {
      rollNumber,
      name,
      email,
      gender,
      maritalStatus,
      course,
      enrollmentDate,
    };

    try {
      const res = await fetch('https://coaching-management-system-9w2s.onrender.com/api/admit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(studentData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong');
      setSuccess('Student admitted successfully!');
    } catch (err) {
      setSuccess('');
      alert('Error: ' + err.message);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">Student Admission Form</h2>
      {success && (
        <div className="bg-green-100 text-green-700 p-3 mb-4 rounded">
          {success}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Roll Number"
          className="w-full p-2 border rounded"
          value={rollNumber}
          onChange={(e) => setRollNumber(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <select
          className="w-full p-2 border rounded"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <select
          className="w-full p-2 border rounded"
          value={maritalStatus}
          onChange={(e) => setMaritalStatus(e.target.value)}
          required
        >
          <option value="">Select Marital Status</option>
          <option value="Single">Single</option>
          <option value="Married">Married</option>
        </select>
        <select
          className="w-full p-2 border rounded"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
        >
          <option value="">Select Course</option>
          {courses.map((c) => (
            <option key={c._id} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
        <input
          type="date"
          className="w-full p-2 border rounded"
          value={enrollmentDate}
          onChange={(e) => setEnrollmentDate(e.target.value)}
          required
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Admit Student
        </button>
      </form>
    </div>
  );
};

export default Admission;
