import mongoose from 'mongoose';

const admitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  courseName: { type: String, required: true },
  // add other fields like roll number, email, etc if needed
});

const Admit = mongoose.model('Admit', admitSchema);

export default Admit;
