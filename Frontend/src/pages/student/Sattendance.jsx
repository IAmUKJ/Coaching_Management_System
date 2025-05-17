import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Attendance = () => {
  const [attendanceData, setAttendanceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if student is logged in
    const token = sessionStorage.getItem('studentToken');
    const studentData = sessionStorage.getItem('studentData');

    if (!token || !studentData) {
      // Not logged in, redirect to login page
      navigate('/student-login'); // or your login route
      return;
    }

    const student = JSON.parse(studentData);
    const studentId = student._id;
    // Fetch attendance data for this student
    const fetchAttendance = async () => {
      try {
        const res = await axios.get(`https://coaching-management-system-9w2s.onrender.com/api/attendance/student/${studentId}`, {
          headers: {
            Authorization: `Bearer ${token}`, // if your API expects a token
          },
        });
        setAttendanceData(res.data);
      } catch (err) {
        setError(
          err.response?.data?.message ||
            'Failed to fetch attendance data. Please try again later.'
        );
      } finally {
        setLoading(false);
      }
    };

    fetchAttendance();
  }, [navigate]);

  if (loading) return <div className="p-4">Loading attendance...</div>;

  if (error) return <div className="p-4 text-red-600">{error}</div>;

  if (!attendanceData || attendanceData.length === 0)
    return <div className="p-4">No attendance records found.</div>;

  // Calculate totals
  const totalClasses = attendanceData.length;
  const totalPresent = attendanceData.filter(record => record.status.toLowerCase() === 'present').length;
  const totalAbsent = attendanceData.filter(record => record.status.toLowerCase() === 'absent').length;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Attendance Records</h1>

      {/* Totals Display */}
      <div className="mb-6 grid grid-cols-3 gap-4 text-center bg-gray-100 p-4 rounded shadow">
        <div>
          <p className="text-lg font-semibold">Total Classes</p>
          <p>{totalClasses}</p>
        </div>
        <div>
          <p className="text-lg font-semibold text-green-600">Total Present</p>
          <p>{totalPresent}</p>
        </div>
        <div>
          <p className="text-lg font-semibold text-red-600">Total Absent</p>
          <p>{totalAbsent}</p>
        </div>
      </div>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2 text-left">Date</th>
            <th className="border border-gray-300 p-2 text-left">Status</th>
            <th className="border border-gray-300 p-2 text-left">Remarks</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((record) => (
            <tr key={record._id}>
              <td className="border border-gray-300 p-2">{new Date(record.date).toLocaleDateString()}</td>
              <td className={`border border-gray-300 p-2 font-semibold ${record.status === 'Present' ? 'text-green-600' : 'text-red-600'}`}>
                {record.status}
              </td>
              <td className="border border-gray-300 p-2">{record.remarks || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;
