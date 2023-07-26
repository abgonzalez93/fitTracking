import { Router } from 'express';
import dietController from '@components/diet/controller/dietController';

const router = Router();

// Define your routes
router.get('/', dietController.getAllDiets);
router.post('/', dietController.createDiet);
router.get('/:id', dietController.getDiet);
router.put('/:id', dietController.updateDiet);
router.delete('/:id', dietController.deleteDiet);

export default router;