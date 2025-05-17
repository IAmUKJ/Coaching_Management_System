import mongoose from 'mongoose';

const plannerSchema = new mongoose.Schema({
  day: String,
  date: String,
  subject: String,
  time: String,
  description: String,
});

const Planner = mongoose.model('Planner', plannerSchema);
export default Planner;
