// --- Interaction Controller ---
// src/controllers/interaction.controller.ts
import { Request, Response } from 'express';
import * as InteractionService from '../services/interaction.service';

export const log = async (req: Request, res: Response) => {
  const { userId, contentId, type } = req.body;
  const interaction = await InteractionService.logInteraction(userId, contentId, type);
  res.status(201).json(interaction);
};

export const getByUser = async (req: Request, res: Response) => {
  const interactions = await InteractionService.getUserInteractions(req.params.userId);
  res.json(interactions);
};
