import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentMaterials = ({ courseId }) => {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    const fetchMaterials = async () => {
      const res = await axios.get(`/api/materials/${courseId}`);
      setMaterials(res.data);
    };
    fetchMaterials();
  }, [courseId]);

  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-2">Course Materials</h3>
      {materials.length === 0 ? (
        <p>No materials uploaded for this course yet.</p>
      ) : (
        <ul className="space-y-2">
          {materials.map((mat) => (
            <li key={mat._id} className="flex justify-between bg-gray-100 p-3 rounded">
              <span>{mat.name}</span>
              <a
                href={mat.fileUrl}
                download
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                Download
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StudentMaterials;
