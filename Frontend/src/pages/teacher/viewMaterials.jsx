import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CourseMaterials = ({ courseId }) => {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    axios.get(`https://coaching-management-system-9w2s.onrender.com/api/materials/${courseId}`)
      .then(res => setMaterials(res.data));
  }, [courseId]);

  return (
    <div className="space-y-4">
      {materials.map((m) => (
        <div key={m._id} className="border p-3 rounded shadow bg-gray-50">
          <h3 className="font-semibold">{m.title} ({m.type})</h3>
          <p className="text-sm text-gray-600">{m.description}</p>
          <a
            href={`https://coaching-management-system-9w2s.onrender.com/${m.fileUrl}`}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline"
          >
            Download {m.fileName}
          </a>
        </div>
      ))}
    </div>
  );
};

export default CourseMaterials;
