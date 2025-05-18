import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getMaterials,
  uploadMaterial,
  deleteMaterial,
} from "../../services/materialService";

const CourseUpload = () => {
  const { courseId } = useParams();
  const [materials, setMaterials] = useState([]);
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);

  const fetchMaterials = async () => {
    const res = await getMaterials(courseId);
    setMaterials(res.data);
  };

  useEffect(() => {
    fetchMaterials();
  }, [courseId]);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file || !name) return alert("Both fields required.");
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    await uploadMaterial(courseId, formData);
    setFile(null);
    setName("");
    fetchMaterials();
  };

  const handleDownload = async (fileUrl) => {
    const filename = fileUrl.split("/").pop();

    try {
      const fullUrl = new URL(fileUrl, "https://coaching-management-system-9w2s.onrender.com/").href;
      const res = await fetch(fullUrl);
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Download failed:", err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this material?")) {
      await deleteMaterial(id);
      fetchMaterials();
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-10">
      <h2 className="text-3xl font-bold text-center">Manage Course Materials</h2>

      {/* Upload Form */}
      <form
        onSubmit={handleUpload}
        className="bg-white p-6 rounded-xl shadow-md space-y-4"
      >
        <div>
          <label className="block font-medium mb-1">Material Name</label>
          <input
            type="text"
            className="w-full border rounded-md p-2"
            placeholder="Assignment 1 / Notes on JS"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Upload File</label>
          <input
            type="file"
            className="w-full"
            onChange={(e) => setFile(e.target.files[0])}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Upload
        </button>
      </form>

      {/* Materials List */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Uploaded Materials</h3>
        {materials.length === 0 && <p>No materials uploaded yet.</p>}
        <ul className="space-y-4">
          {materials.map((mat) => (
            <li
              key={mat._id}
              className="bg-gray-100 p-4 rounded flex justify-between items-center"
            >
              <div>
                <p className="font-medium">{mat.name}</p>
                {/* View/Download Link */}
                <a
                  href={`https://coaching-management-system-9w2s.onrender.com${mat.fileUrl}`} // Use fileUrl directly
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm"
                >
                  View / Download
                </a>

                {/* Download button */}
                <button
                  onClick={() => handleDownload(mat.fileUrl)}
                  className="ml-2 text-white bg-blue-500 px-2 py-1 rounded hover:bg-blue-600 text-sm"
                >
                  Download PDF
                </button>
              </div>

              {/* Delete button */}
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => handleDelete(mat._id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseUpload;
