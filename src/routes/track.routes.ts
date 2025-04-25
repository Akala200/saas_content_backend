// src/routes/interaction.routes.ts
import { Router } from 'express';
import * as InteractionController from '../controllers/track.controller';

const router = Router();

router.post('/', InteractionController.log);
router.get('/:userId', InteractionController.getByUser);

export default router;