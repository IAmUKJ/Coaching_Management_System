import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AttendancePage = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedDate, setSelectedDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [allStudents, setAllStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [attendance, setAttendance] = useState({});

  // Fetch all courses
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get('https://coaching-management-system-9w2s.onrender.com/api/courses');
        setCourses(res.data);
      } catch (err) {
        console.error('Error fetching courses:', err);
      }
    };
    fetchCourses();
  }, []);

  // Fetch all students once
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('https://coaching-management-system-9w2s.onrender.com/api/admit');
        setAllStudents(response.data);
      } catch (error) {
        console.error('Error fetching students:', error);
        setAllStudents([]);
      }
    };
    fetchStudents();
  }, []);

  // Filter students when course changes
  useEffect(() => {
    if (!selectedCourse) {
      setFilteredStudents([]);
      return;
    }
    const filtered = allStudents.filter(student => student.course === selectedCourse);
    setFilteredStudents(filtered);
  }, [selectedCourse, allStudents]);

  // Fetch attendance for selected date & course
  useEffect(() => {
    const fetchAttendance = async () => {
      if (!selectedCourse || !selectedDate) return;
      try {
        const res = await axios.get(`https://coaching-management-system-9w2s.onrender.com/api/attendance`, {
          params: { courseId: selectedCourse, date: selectedDate }
        });

        const attendanceMap = {};
        res.data.forEach(entry => {
          attendanceMap[entry.studentId] = entry.status;
        });
        setAttendance(attendanceMap);
      } catch (err) {
        console.error('Error fetching attendance:', err);
        setAttendance({});
      }
    };
    fetchAttendance();
  }, [selectedCourse, selectedDate]);

  const handleStatusChange = (studentId, status) => {
    setAttendance(prev => ({ ...prev, [studentId]: status }));
  };

  const handleSubmit = async () => {
    try {
      const attendanceArray = filteredStudents.map(student => ({
        studentId: student._id,
        courseId: student.courseId || selectedCourse,
        date: selectedDate,
        status: attendance[student._id] || 'Absent',
      }));
      await axios.post('https://coaching-management-system-9w2s.onrender.com/api/attendance', attendanceArray);
      alert('Attendance submitted successfully!');
    } catch (err) {
      console.error('Error submitting attendance:', err);
      alert('Error submitting attendance');
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">📋 Attendance</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <select
          className="border px-4 py-2 rounded w-full"
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
        >
          <option value="">Select Course</option>
          {Array.isArray(courses) && courses.map(course => (
            <option key={course._id} value={course.name}>{course.name}</option>
          ))}
        </select>

        <input
          type="date"
          className="border px-4 py-2 rounded w-full"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>

      {filteredStudents.length > 0 ? (
        <div className="space-y-4">
          {filteredStudents.map(student => (
            <div
              key={student._id}
              className="flex items-center justify-between p-4 border rounded"
            >
              <div>
                <p className="font-semibold">{student.name}</p>
                <p className="text-sm text-gray-500">{student.email}</p>
              </div>
              <select
                className="border px-2 py-1 rounded"
                value={attendance[student._id] || 'Absent'}
                onChange={(e) => handleStatusChange(student._id, e.target.value)}
              >
                <option value="Present">Present</option>
                <option value="Absent">Absent</option>
              </select>
            </div>
          ))}

          <button
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded mt-6 w-full"
            onClick={handleSubmit}
          >
            Submit Attendance
          </button>
        </div>
      ) : (
        selectedCourse && <p>No students found for this course.</p>
      )}
    </div>
  );
};

export default AttendancePage;
