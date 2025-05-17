import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  rollNumber: { type: String, unique: true, required: true },
  name: String,
  email: { type: String, unique: true },
  gender: String,
  maritalStatus: String,
  course: String,
  password: String, // hashed
  enrollmentDate: {
    type: Date,
    default: Date.now, // automatically set to current date
  },
});

export default mongoose.models.Student || mongoose.model('Student', studentSchema);
