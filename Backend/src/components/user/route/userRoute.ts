import { Router } from 'express';
import UserController from '@components/user/controller/userController';

const router = Router();

// Define your routes
router.get('/', UserController.getAllUsers);
router.post('/', UserController.createUser);
router.get('/:id', UserController.getUser);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

export default router;