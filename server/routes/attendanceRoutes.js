// routes/attendance.routes.js
import express from 'express';
import Attendance from '../models/Attendance.js'; // Adjust path as needed

const router = express.Router();

// GET attendance by student ID
router.get('/student/:studentId', async (req, res) => {
  const { studentId } = req.params;

  try {
    const records = await Attendance.find({ studentId }).sort({ date: 1 }); // Sorted by date
    res.json(records);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching attendance', error });
  }
});

// ✅ GET attendance by courseId and date
router.get('/', async (req, res) => {
  const { courseId, date } = req.query;

  if (!courseId || !date) {
    return res.status(400).json({ message: 'courseId and date are required' });
  }

  try {
    const records = await Attendance.find({ courseId, date });
    res.json(records);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// ✅ POST attendance array
router.post('/', async (req, res) => {
  try {
    const attendanceRecords = req.body; // Array of attendance entries
    await Attendance.insertMany(attendanceRecords);
    res.status(201).json({ message: 'Attendance recorded' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving attendance', error });
  }
});

export default router;
