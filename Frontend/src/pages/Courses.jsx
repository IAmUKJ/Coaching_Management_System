import { useEffect, useState } from "react";
import { BookOpen, Users, GraduationCap } from "lucide-react";

const UploadMaterialsHome = () => {
  const [admissions, setAdmissions] = useState([]);
  const [coursesData, setCoursesData] = useState([]); // Store data from /api/courses
  const [courseStats, setCourseStats] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const MAX_CAPACITY = 100;

  // Fetch admissions
  useEffect(() => {
    const fetchAdmissions = async () => {
      try {
        const res = await fetch(
          "https://coaching-management-system-9w2s.onrender.com/api/admit"
        );
        const data = await res.json();
        setAdmissions(data);
      } catch (err) {
        console.error("Error fetching admissions:", err);
      }
    };

    fetchAdmissions();
  }, []);

  // Fetch courses with description
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch(
          "https://coaching-management-system-9w2s.onrender.com/api/courses"
        );
        const data = await res.json();
        setCoursesData(data);
      } catch (err) {
        console.error("Error fetching courses:", err);
      }
    };

    fetchCourses();
  }, []);

  // Merge course stats with description
  useEffect(() => {
  if (coursesData.length === 0) {
    setCourseStats([]);
    return;
  }

  const counts = {};
  admissions.forEach(({ course }) => {
    const trimmed = course.trim();
    counts[trimmed] = (counts[trimmed] || 0) + 1;
  });

  const statsArray = coursesData.map((c) => {
    const trimmedName = c.name.trim();
    const enrolled = counts[trimmedName] || 0;

    return {
      courseName: trimmedName,
      description: c.description || "No description provided.",
      price: c.price,
      enrolled,
      seatsLeft: MAX_CAPACITY - enrolled,
    };
  });

  setCourseStats(statsArray); // include all courses, even if enrolled = 0
}, [admissions, coursesData]);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-indigo-100 py-12 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-300 to-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-indigo-300 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse delay-700"></div>
      <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-6 shadow-lg">
            <GraduationCap className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Available Courses
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover our comprehensive range of courses designed to enhance your skills and knowledge
          </p>
          {courseStats.length > 0 && (
            <div className="mt-8 inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-white/20">
              <span className="text-sm font-medium text-gray-600">
                {courseStats.length} courses available with open seats
              </span>
            </div>
          )}
        </div>

        {courseStats.length === 0 ? (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-6">
              <BookOpen className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">No Courses Available</h3>
            <p className="text-gray-500 text-lg max-w-md mx-auto">
              All courses are currently at full capacity. Please check back later for availability.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courseStats.map((course, index) => (
              <div
                key={course.courseName}
                onClick={() => setSelectedCourse(course.courseName)}
                className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 border border-white/50 hover:border-blue-200 cursor-pointer transform hover:-translate-y-2 hover:scale-105 relative overflow-hidden"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                {/* Card gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                
                {/* Progress indicator */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200 rounded-t-3xl overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-1000 ease-out"
                    style={{ width: `${(course.enrolled / MAX_CAPACITY) * 100}%` }}
                  ></div>
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center gap-1 px-3 py-1 bg-green-100 rounded-full">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-medium text-green-700">Available</span>
                    </div>
                  </div>

                  {/* Course Name */}
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 mb-3 line-clamp-2">
                    {course.courseName}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                    {course.description}
                  </p>

                  <p className="text-sm text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                    Price : {course.price} per month
                  </p>
                  {/* Stats */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-blue-500" />
                        <span className="text-sm font-medium text-gray-700">Enrolled</span>
                      </div>
                      <span className="text-sm font-bold text-blue-600">{course.enrolled}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-green-500" />
                        <span className="text-sm font-medium text-gray-700">Available</span>
                      </div>
                      <span className="text-sm font-bold text-green-600">{course.seatsLeft}</span>
                    </div>
                  </div>

                  {/* Capacity Bar */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-medium text-gray-500">Capacity</span>
                      <span className="text-xs font-medium text-gray-700">
                        {course.enrolled}/{MAX_CAPACITY}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${(course.enrolled / MAX_CAPACITY) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedCourse && (
        <CoursePopup
          course={courseStats.find((c) => c.courseName === selectedCourse)}
          onClose={() => setSelectedCourse(null)}
        />
      )}

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

const CoursePopup = ({ course, onClose }) => {
  if (!course) return null;

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300"
      ></div>
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl max-w-lg w-full p-8 relative border border-white/20 transform transition-all duration-300 scale-100">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-700 transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Header */}
          <div className="mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent mb-2">
              {course.courseName}
            </h2>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">Description</h3>
            <p className="text-gray-600 leading-relaxed">{course.description}</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 rounded-2xl p-4 text-center">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-xl mx-auto mb-2">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div className="text-2xl font-bold text-blue-600">{course.enrolled}</div>
              <div className="text-sm text-blue-600/80 font-medium">Enrolled Students</div>
            </div>
            
            <div className="bg-green-50 rounded-2xl p-4 text-center">
              <div className="flex items-center justify-center w-10 h-10 bg-green-500 rounded-xl mx-auto mb-2">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div className="text-2xl font-bold text-green-600">{course.seatsLeft}</div>
              <div className="text-sm text-green-600/80 font-medium">Seats Available</div>
            </div>
          </div>

          {/* Capacity Visualization */}
          <div className="bg-gray-50 rounded-2xl p-4">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-semibold text-gray-700">Course Capacity</span>
              <span className="text-sm font-medium text-gray-600">
                {course.enrolled}/{100}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-blue-500 to-indigo-500 h-3 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${(course.enrolled / 100) * 100}%` }}
              ></div>
            </div>
            <div className="mt-2 text-xs text-gray-500 text-center">
              {((course.enrolled / 100) * 100).toFixed(1)}% capacity filled
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadMaterialsHome;