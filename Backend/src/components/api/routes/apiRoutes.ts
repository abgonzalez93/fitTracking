// External Libraries
import { Router } from 'express'

// Components { Controllers, Models, Routes, Services, Validations }
import apiController from '@api/controllers/apiController'
import userRoutes from '@api/routes/userRoutes'
import dietRoutes from '@api/routes/dietRoutes'

const router = Router()

router.get('/', apiController.getWelcomeMessage)
router.use('/diet', dietRoutes)
router.use('/users', userRoutes)

export default router
