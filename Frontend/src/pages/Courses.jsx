import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCourses } from "../../services/courseService";
import { BookOpenIcon } from "@heroicons/react/24/outline"; // Optional icon

const UploadMaterialsHome = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await getCourses();
      setCourses(res.data);
    };
    fetchCourses();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-100 to-gray-200 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
          📚 Courses Available
        </h2>

        {courses.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            No courses found.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course._id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 border border-gray-200 hover:border-blue-400 cursor-pointer group"
                
              >
                <div className="flex items-center gap-3 mb-4">
                  <BookOpenIcon className="h-8 w-8 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600">
                    {course.name}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {course.description || "No description available for this course."}
                </p>
                
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadMaterialsHome;
