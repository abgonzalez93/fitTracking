import express from 'express';
import userRoutes from '../components/user/route/userRoute';

const router = express.Router();

// Apply routers
router.use('/api/users', userRoutes);

export default router;