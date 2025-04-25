import { Request, Response } from 'express';
import * as ContentService from '../services/content.service';

export const create = async (req: Request, res: Response) => {
  const content = await ContentService.createContent(req.body);
  res.status(201).json(content);
};

export const list = async (req: Request, res: Response) => {
  const content = await ContentService.getAllContent();
  res.json(content);
};

export const get = async (req: Request, res: Response) => {
  const content = await ContentService.getContentById(req.params.id);
  res.json(content);
};

export const update = async (req: Request, res: Response) => {
  const content = await ContentService.updateContent(req.params.id, req.body);
  res.json(content);
};

export const remove = async (req: Request, res: Response) => {
  await ContentService.deleteContent(req.params.id);
  res.status(204).send();
};