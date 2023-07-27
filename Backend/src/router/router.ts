import express from 'express'
import authRoutes from '@components/auth/route/authRoutes'
import userRoutes from '@components/user/route/userRoutes'
import dietRoutes from '@components/diet/route/dietRoutes'

const router = express.Router()

// Apply router
router.use('/auth', authRoutes)
router.use('/api/diet', dietRoutes)
router.use('/api/users', userRoutes)

export default router
