import { api } from "./api";

export const getMaterials = (courseId) => api.get(`/materials/${courseId}`);
export const uploadMaterial = (courseId, formData) =>
  api.post(`/materials/${courseId}/upload`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
export const deleteMaterial = (id) => api.delete(`/materials/${id}`);
const getMaterialDownloadUrl = (fileUrl) => {
  if (!fileUrl) return '';
  const filename = fileUrl.split('/').pop();
  return `https://coaching-management-system-9w2s.onrender.com/download/${filename}`;
};
