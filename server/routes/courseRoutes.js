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

export default router;
