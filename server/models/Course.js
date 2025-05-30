// models/Course.js
import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  validTill: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Course = mongoose.model('Course', courseSchema);
export default Course;
