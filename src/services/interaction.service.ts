// --- Interaction Service ---
// src/services/interaction.service.ts
import { Interaction } from '../models/engagement.model';

export const logInteraction = async (
  userId: string,
  contentId: string,
  type: 'view' | 'like' | 'click'
) => {
  return await Interaction.create({ userId, contentId, type });
};

export const getUserInteractions = async (userId: string) => {
  return await Interaction.find({ userId });
};
