// --- Recommendation Service (Stub for now) ---
// src/services/recommendation.service.ts
import { getUserPreferences } from '../services/auth.service';
import { Content } from '../models/content.model';

export const getRecommendations = async (userId: string) => {
  const preferences = await getUserPreferences(userId);
  return await Content.find({ tags: { $in: preferences } }).limit(10);
};
