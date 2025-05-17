import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Courses from '../pages/Courses'


// Student Pages

import StudentDashboard from '../pages/student/StudentDashboard';
import RequireStudentLogin from '../pages/student/RequireStudentLogin';
import StudentClasses from '../pages/student/Classes';
import StudentMaterials from '../pages/student/Materials';
import StudentResults from '../pages/student/Results';

// Teacher Pages
import TeacherDashboard from '../pages/teacher/TeacherDashboard';
import Login from '../pages/teacher/Login';
import TeacherUploadMaterial from '../pages/teacher/UploadMaterial';
import AdmissionForm from '../pages/teacher/Admission';
import TeacherAttendance from '../pages/teacher/Attendance';
import TeacherScheduleClass from '../pages/teacher/ScheduleClass';
import Course from '../pages/teacher/Course';

import UploadMaterialsHome from '../pages/teacher/UploadMaterial';
import CourseUpload from '../components/CourseUpload';
import StudentList from '../components/StudentList';
import StudentLogin from '../pages/student/StudentLogin';
import StudentAttendance from '../pages/student/Sattendance';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/courses" element={<Courses />} />

      {/* Student Routes */}
      <Route path="/student/login" element={<StudentLogin />} />
      <Route
        path="/student/dashboard"
        element={
          <RequireStudentLogin>
            <StudentDashboard />
          </RequireStudentLogin>
        }
      />
      <Route path='/student/myattendance' element={<StudentAttendance />} />
      <Route path="/student/classes" element={<StudentClasses />} />
      <Route path="/student/materials" element={<StudentMaterials />} />
      <Route path="/student/results" element={<StudentResults />} />

      {/* Teacher Routes */}
      <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
      <Route path="/teacher/login" element={<Login />} />
      <Route path="/teacher/upload-material" element={<TeacherUploadMaterial />} />

      <Route path="/upload-materials" element={<UploadMaterialsHome />} />
      <Route path="/upload-materials/:courseId" element={<CourseUpload />} />
      <Route path="/teacher/admissions" element={<AdmissionForm />} />
      <Route path="/teacher/admitted-students" element={<StudentList />} />
      <Route path="/teacher/courses" element={<Course />} />
      <Route path="/teacher/attendance" element={<TeacherAttendance />} />
      <Route path="/teacher/schedule-class" element={<TeacherScheduleClass />} />
    </Routes>
  );
}
