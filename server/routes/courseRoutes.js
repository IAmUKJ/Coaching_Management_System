// routes/courses.js
import express from 'express';
import Course from '../models/Course.js';
import Student from '../models/Student.js';
const router = express.Router();

// POST create course
router.post('/courses', async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.status(201).json(course);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET all courses
router.get('/courses', async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

// DELETE course and related students
router.delete('/courses/:id', async (req, res) => {
  try {
    const courseId = req.params.id;

    // Find course first (to get its name)
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    const courseName = course.name;


    // Delete the course
    await Course.findByIdAndDelete(courseId);

    // Delete students enrolled in this course by name
    const deletedStudents = await Student.deleteMany({ course: courseName });
    
    res.json({
      message: `Course '${courseName}' and ${deletedStudents.deletedCount} associated student(s) deleted successfully.`,
    });
  } catch (error) {
    console.error('Error deleting course and students:', error);
    res.status(500).json({ error: 'Failed to delete course and related students' });
  }
});

export default router;
