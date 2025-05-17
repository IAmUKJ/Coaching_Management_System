import express from 'express';
import Planner from '../models/Planner.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const entries = await Planner.find();
  res.json(entries);
});

router.post('/', async (req, res) => {
  const newEntry = new Planner(req.body);
  await newEntry.save();
  res.json(newEntry);
});

router.put('/:id', async (req, res) => {
  const updated = await Planner.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete('/:id', async (req, res) => {
  await Planner.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

export default router;
