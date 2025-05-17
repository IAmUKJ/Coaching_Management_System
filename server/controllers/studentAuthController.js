import Student from '../models/Student.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import sendEmail from '../utils/sendEmail.js';

export const registerStudent = async (req, res) => {
  const { name, email, rollNumber, password } = req.body;
  try {
    const hashed = await bcrypt.hash(password, 10);
    const student = await Student.create({ name, email, rollNumber, password: hashed });
    res.status(201).json({ message: 'Student registered successfully',
        student: {
        _id: student._id,
        name: student.name,
        email: student.email,
        rollNumber: student.rollNumber,
      },
     });
  } catch (err) {
    res.status(500).json({ error: 'Registration failed' });
  }
};

export const loginStudent = async (req, res) => {
  const { emailOrRoll, password } = req.body;
  try {
    const student = await Student.findOne({
      $or: [{ email: emailOrRoll }, { rollNumber: emailOrRoll }],
    });
    if (!student) return res.status(404).json({ error: 'Student not found' });

    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: student._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, student });
  } catch (err) {
    res.status(500).json({ error: 'Login failed' });
  }
};

export const forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const student = await Student.findOne({ email });
    if (!student) return res.status(404).json({ error: 'Email not found' });

    const token = jwt.sign({ id: student._id }, process.env.JWT_SECRET, { expiresIn: '15m' });
    student.resetToken = token;
    student.resetTokenExpire = Date.now() + 15 * 60 * 1000;
    await student.save();

    const link = `${process.env.CLIENT_URL}/reset-password/${token}`;
    await sendEmail(email, 'Reset Password', `Click here: ${link}`);

    res.json({ message: 'Password reset link sent' });
  } catch (err) {
    res.status(500).json({ error: 'Error sending email' });
  }
};

export const resetPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const student = await Student.findById(decoded.id);
    if (!student || student.resetToken !== token || student.resetTokenExpire < Date.now())
      return res.status(400).json({ error: 'Invalid or expired token' });

    student.password = await bcrypt.hash(password, 10);
    student.resetToken = undefined;
    student.resetTokenExpire = undefined;
    await student.save();

    res.json({ message: 'Password reset successful' });
  } catch (err) {
    res.status(500).json({ error: 'Reset failed' });
  }
};
