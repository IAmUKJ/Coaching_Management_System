import express from "express";
import multer from "multer";
import path from "path";
import {
  uploadMaterial,
  getMaterialsByCourse,
  getMaterialsByCourseName,
  deleteMaterial,
  downloadMaterial
} from "../controllers/materialController.js";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, path.join(__dirname, "../uploads")); // NOT just "uploads"
  },
  filename(req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// POST: Upload file
router.post("/:courseId/upload", upload.single("file"), uploadMaterial);

// GET: All materials by course
router.get("/:courseId", getMaterialsByCourse);

// GET materials by course name (not ID)
router.get('/by-name/:courseName', getMaterialsByCourseName);

// DELETE: Delete material by ID
router.delete("/:id", deleteMaterial);

// Download route (NEW)
router.get('/download/:filename', (req, res) => {
  const filename = req.params.filename;

  const filePath = path.join(__dirname, '../uploads', filename);

  // Check if file exists
  fs.stat(filePath, (err, stats) => {
    if (err) {
      console.error('Download error:', err);
      return res.status(404).send('File not found');
    }

    res.download(filePath, filename);
  });
});

export default router;