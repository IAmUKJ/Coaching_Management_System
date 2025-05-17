import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCourses } from "../../../services/courseService";
import Sidebar from "../../components/Sidebar"
const UploadMaterialsHome = () => {
  const [courses, setCourses] = useState([]);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await getCourses();
      setCourses(res.data);
    };
    fetchCourses();
  }, []);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Mobile Hamburger Icon */}
      <div className="md:hidden absolute top-[70px] left-4 z-30">
        <button onClick={() => setSidebarOpen(true)} className="space-y-1.5">
          <div className="w-6 h-0.5 bg-black" />
          <div className="w-6 h-0.5 bg-black" />
          <div className="w-6 h-0.5 bg-black" />
        </button>
      </div>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Select a Course</h2>
      {courses.length === 0 ? (
        <p className="text-center text-gray-500">No courses found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course._id}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl cursor-pointer transition"
              onClick={() => navigate(`/upload-materials/${course._id}`)}
            >
              <h3 className="text-xl font-semibold">{course.name}</h3>
              <p className="text-sm text-gray-600 mt-2">
                {course.description || "No description"}
              </p>
              <p className="mt-2 text-blue-600 text-sm">Click to upload materials</p>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default UploadMaterialsHome;
