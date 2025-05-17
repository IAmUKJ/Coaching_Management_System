import { fileURLToPath } from 'url';
// controllers/materialController.js
import path from 'path';
import { dirname } from 'path';
import Material from "../models/Material.js";
import Course from '../models/Course.js';

export const uploadMaterial = async (req, res) => {
  try {
    const material = new Material({
      courseId: req.params.courseId,
      name: req.body.name,
      fileUrl: `/uploads/${req.file.filename}`,
    });
    await material.save();
    res.status(201).json(material);
  } catch (error) {
    res.status(500).json({ error: "Upload failed." });
  }
};

export const getMaterialsByCourse = async (req, res) => {
  try {
    const materials = await Material.find({ courseId: req.params.courseId });
    res.json(materials);
  } catch (error) {
    res.status(500).json({ error: "Fetching materials failed." });
  }
};

export const getMaterialsByCourseName = async (req, res) => {
  try {
    const course = await Course.findOne({ name: req.params.courseName });

    if (!course) return res.status(404).json({ message: 'Course not found' });

    const materials = await Material.find({ courseId: course._id });

    res.json(materials);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching materials' });
  }
};

export const deleteMaterial = async (req, res) => {
  try {
    await Material.findByIdAndDelete(req.params.id);
    res.json({ message: "Material deleted." });
  } catch (error) {
    res.status(500).json({ error: "Deletion failed." });
  }
};



// Setup __dirname for ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const downloadMaterial = (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, '..', 'uploads', filename);
  res.download(filePath, filename, (err) => {
    if (err) {
      console.error('Download error:', err);
      res.status(404).json({ error: 'File not found' });
    }
  });
};
