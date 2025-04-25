// src/routes/recommendation.routes.ts
import { Router } from 'express';
import { recommend } from '../controllers/recommend.controller';

const router = Router();

router.get('/:userId', recommend);

export default router;