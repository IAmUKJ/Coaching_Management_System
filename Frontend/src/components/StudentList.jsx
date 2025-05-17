import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://coaching-management-system-9w2s.onrender.com/api/admit')
      .then(res => {
        if (Array.isArray(res.data)) {
          setStudents(res.data);
        } else {
          console.error('Expected array but got:', res.data);
          setStudents([]);
        }
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://coaching-management-system-9w2s.onrender.com/api/admit/${id}`);
      setStudents(prev => prev.filter(student => student._id !== id));
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  const filteredStudents = students.filter(student =>
    student.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.rollNumber?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Student List</h2>

        <input
          type="text"
          placeholder="Search by name, email or roll number"
          className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Roll No</th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Course</th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredStudents.length > 0 ? (
                filteredStudents.map(student => (
                  <tr key={student._id} className="hover:bg-gray-100 transition">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{student.rollNumber}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{student.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{student.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{student.course}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button
                        onClick={() => handleDelete(student._id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-md shadow-sm transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-6 text-gray-500">No students found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentList;
