// src/routes/content.routes.ts
import { Router } from 'express';
import * as ContentController from '../controllers/content.controller';

const router = Router();

router.post('/', ContentController.create);
router.get('/', ContentController.list);
router.get('/:id', ContentController.get);
router.put('/:id', ContentController.update);
router.delete('/:id', ContentController.remove);

export default router;