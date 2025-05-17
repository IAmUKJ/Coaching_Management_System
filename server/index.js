import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import authRouter from './routes/auth.js'
import connectToDatabase from './db/db.js'
import plannerRoutes from './routes/plannerRoutes.js';
import courseRoutes from './routes/courseRoutes.js';
import materialRoutes from './routes/materialRoutes.js';
import { fileURLToPath } from 'url';
import path from 'path';
import admissionRoutes from './routes/admission.js';
import studentRoutes from './routes/authRoutes.js'
import paymentRoutes from "./routes/paymentRoutes.js";
import attendanceRoutes from './routes/attendanceRoutes.js';

connectToDatabase()
const app=express()
app.use(cors())
app.use(express.json())
app.use('/api/auth',authRouter)
app.use('/api/planner', plannerRoutes);
app.use('/api', courseRoutes);
app.use("/api/materials", materialRoutes);
app.use('/api/admit', admissionRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/authRoutes",studentRoutes);
app.use('/api/attendance', attendanceRoutes);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})