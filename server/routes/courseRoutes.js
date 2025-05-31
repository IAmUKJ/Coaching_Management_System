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

// DELETE course and associated students
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Step 1: Find course by ID to get its name
    const course = await Course.findById(id);
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    const courseName = course.name;

    // Step 2: Delete the course
    await Course.findByIdAndDelete(id);

    // Step 3: Delete students enrolled in this course
    const deletedStudents = await Student.deleteMany({ course: courseName });

    res.json({
      message: `Course '${courseName}' deleted successfully.`,
      deletedStudents: deletedStudents.deletedCount,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete course and associated students' });
  }
});

export default router;
