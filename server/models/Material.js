import mongoose from "mongoose";

const materialSchema = new mongoose.Schema({
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
  name: { type: String, required: true },
  fileUrl: { type: String, required: true },
});

export default mongoose.model("Material", materialSchema);
