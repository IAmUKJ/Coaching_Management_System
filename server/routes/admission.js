import express from 'express';
import Student from '../models/Student.js';
import nodemailer from 'nodemailer';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

const generatePassword = () => Math.random().toString(36).slice(-8);

const sendEmail = async (to, password) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.ADMIN_EMAIL,
      pass: process.env.ADMIN_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  await transporter.sendMail({
    from: '"Institute Admin" <no-reply@institute.com>',
    to,
    subject: 'Your Student Portal Login Credentials',
    html: `<p>Your admission was successful!</p><p><b>Email:</b> ${to}</p><p><b>Password:</b> ${password}</p>`,
  });
};

// POST /api/admit
router.post('/', async (req, res) => {
  try {
    const { rollNumber, name, email, gender, maritalStatus, course } = req.body;

    if (!rollNumber) return res.status(400).json({ error: 'Roll Number is required' });

    const existingRoll = await Student.findOne({ rollNumber });
    if (existingRoll) return res.status(400).json({ error: 'Roll Number already registered' });

    const existingEmail = await Student.findOne({ email });
    if (existingEmail) return res.status(400).json({ error: 'Email already registered' });

    const password = generatePassword();
    const hashedPassword = await bcrypt.hash(password, 10);

    const student = new Student({
      rollNumber,
      name,
      email,
      gender,
      maritalStatus,
      course,
      password: hashedPassword,
      // enrollmentDate is automatically set by schema
    });

    await student.save();
    await sendEmail(email, password);

    res.json({ message: 'Student admitted successfully. Password sent to email.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Admission failed' });
  }
});

// GET /api/admit
router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch students' });
  }
});

// Route to get student by ID
router.get('/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id); // ✅ Correct model
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json(student); // Will include enrollmentDate
  } catch (error) {
    console.error(error); // Log the actual error
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// DELETE /api/admit/:id
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Student.findByIdAndDelete(id);
    res.json({ message: 'Student deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete student' });
  }
});

export default router;
