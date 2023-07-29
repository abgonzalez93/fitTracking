// External Libraries
import { Router } from 'express'

// Components { Controllers, Models, Routes, Services, Validations }
import apiController from '@components/api/controller/apiController'
import userRoutes from '@components/user/route/userRoutes'
import dietRoutes from '@components/diet/route/dietRoutes'

const router = Router()

router.get('/', apiController.getWelcomeMessage)
router.use('/diet', dietRoutes)
router.use('/users', userRoutes)

export default router
