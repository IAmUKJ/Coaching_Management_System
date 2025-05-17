import { api } from './api';

export const getCourses = () => api.get('/courses');
export const createCourse = (course) => api.post('/courses', course);
import axios from "axios";

export const deleteCourse = (id) =>
  axios.delete(`https://coaching-management-system-9w2s.onrender.com/api/courses/${id}`); // update base URL if needed
