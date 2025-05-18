import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StudentSidebar from '../../components/StudentSidebar';
import { useNavigate } from 'react-router-dom';

const StudentDashboard = () => {
  const [courseName, setCourseName] = useState('');
  const [materials, setMaterials] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const studentData = sessionStorage.getItem('studentData');
    if (!studentData) {
      navigate('/student/login');
      return;
    }

    const student = JSON.parse(studentData);
    const email = student.email;

    const fetchCourse = async () => {
      try {
        const res = await axios.get('https://coaching-management-system-9w2s.onrender.com/api/admit');
        const entry = res.data.find(e => e.email === email);
        if (entry) {
          setCourseName(entry.course);
        }
      } catch (err) {
        console.error('Error fetching course:', err);
      }
    };

    fetchCourse();
  }, [navigate]);

  useEffect(() => {
    const fetchMaterials = async () => {
      if (!courseName) return;

      try {
        const res = await axios.get(`https://coaching-management-system-9w2s.onrender.com/api/materials/by-name/${encodeURIComponent(courseName)}`);
        setMaterials(res.data);
      } catch (err) {
        console.error('Error fetching materials:', err);
      }
    };

    fetchMaterials();
  }, [courseName]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <StudentSidebar />

      <main className="flex-1 p-6">
        <div className="max-w-5xl mx-auto">
          {/* Course Info */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2 text-gray-800">📘 My Enrolled Course</h1>
            <p className="text-xl text-blue-700 font-semibold">{courseName || 'Loading course...'}</p>
          </div>

          {/* Materials */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">📂 Course Materials</h2>

            {materials.length === 0 ? (
              <div className="text-gray-500 text-center py-8">No materials uploaded for this course.</div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {materials.map((mat) => (
                  <div
                    key={mat._id}
                    className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex flex-col justify-between shadow hover:shadow-lg transition-shadow"
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-blue-800 mb-2 truncate">{mat.name}</h3>
                      <p className="text-sm text-gray-500">Material ID: {mat._id.slice(-6)}</p>
                    </div>
                    <a
                      href={`https://coaching-management-system-9w2s.onrender.com${mat.fileUrl}`}
                      download
                      className="mt-4 bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 text-center"
                    >
                      ⬇ Download
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;
