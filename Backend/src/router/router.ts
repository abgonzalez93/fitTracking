// External Libraries
import express from 'express'

// Middlewares
import { authentication } from '@middlewares/authentication/authentication'

// Components { Controllers, Models, Routes, Services, Validations }
import authRoutes from '@auth/routes/authRoutes'
import apiRoutes from '@api/routes/apiRoutes'

const router = express.Router()

router.use('/auth', authRoutes)
router.use('/api', authentication, apiRoutes)

export default router
