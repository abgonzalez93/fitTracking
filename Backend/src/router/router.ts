// External Libraries
import express from 'express'

// Components { Controllers, Models, Routes, Services, Validations }
import apiRoutes from '@components/api/route/apiRoutes'
import authRoutes from '@components/auth/route/authRoutes'

const router = express.Router()

router.use('/auth', authRoutes)
router.use('/api', apiRoutes)

export default router
