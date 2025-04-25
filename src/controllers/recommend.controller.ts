// --- Recommendation Controller ---
// src/controllers/recommendation.controller.ts
import { Request, Response } from 'express';
import { getRecommendations } from '../services/recommendation.service';

export const recommend = async (req: Request, res: Response) => {
  const recommendations = await getRecommendations(req.params.userId);
  res.json(recommendations);
};
