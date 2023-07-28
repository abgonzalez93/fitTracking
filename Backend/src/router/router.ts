// External Libraries
import express from 'express'

// Components { Controllers, Models, Routes, Services, Validations }
import authRoutes from '@components/auth/route/authRoutes'
import userRoutes from '@components/user/route/userRoutes'
import dietRoutes from '@components/diet/route/dietRoutes'

const router = express.Router()

// router.use('/auth', authRoutes)
router.use('/api/diet', dietRoutes)
router.use('/api/users', userRoutes)

export default router
