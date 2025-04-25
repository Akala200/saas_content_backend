// --- Content Service ---
// src/services/content.service.ts
import { Content, IContent } from '../models/content.model';

export const createContent = async (data: Partial<IContent>, userId: string) => {
  return await Content.create({ ...data, createdBy: userId });
};

export const getAllContent = async () => {
  return await Content.find();
};

export const getContentById = async (id: string) => {
  return await Content.findById(id);
};

export const updateContent = async (id: string, updates: Partial<IContent>) => {
  return await Content.findByIdAndUpdate(id, updates, { new: true });
};

export const deleteContent = async (id: string) => {
  return await Content.findByIdAndDelete(id);
};
