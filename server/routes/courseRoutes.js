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

// DELETE /courses/:id — deletes course and related students
router.delete('/courses/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    const courseName = course.name;

    // Delete the course
    await Course.findByIdAndDelete(req.params.id);

    // Delete students enrolled in that course
    const deletedResult = await Student.deleteMany({ course: courseName });

    res.json({
      message: `Deleted course '${courseName}' and ${deletedResult.deletedCount} student(s).`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete course and students' });
  }
});
export default router;
