// External Libraries
import express from 'express'

// Components { Controllers, Models, Routes, Services, Validations }
import authRoutes from '@components/auth/routes/authRoutes'
import apiRoutes from '@components/api/routes/apiRoutes'

const router = express.Router()

router.use('/auth', authRoutes)
router.use('/api', apiRoutes)

export default router
