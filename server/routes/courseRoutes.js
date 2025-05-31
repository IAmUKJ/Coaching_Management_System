// routes/courses.js
import express from 'express';
import Course from '../models/Course.js';

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

// DELETE course
router.delete('/courses/:id', async (req, res) => {
  await Course.findByIdAndDelete(req.params.id);
  res.json({ message: 'Course deleted' });
});
// DELETE /api/admit/course/:courseName — delete all students in a course
router.delete('/course/:courseName', async (req, res) => {
  try {
    const { courseName } = req.params;

    const deletedResult = await Student.deleteMany({ course: courseName });

    res.json({
      message: `Deleted ${deletedResult.deletedCount} student(s) enrolled in '${courseName}'.`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete students by course' });
  }
});

export default router;
