// models/attendance.model.js
import mongoose from 'mongoose';

const attendanceSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true,
  },
  courseId: {
    type: String,
    required: true,
  },
  date: {
    type: String, // e.g., "2025-05-17"
    required: true,
  },
  status: {
    type: String,
    enum: ['Present', 'Absent'],
    default: 'Absent',
  },
});

const Attendance = mongoose.model('Attendance', attendanceSchema);
export default Attendance;
