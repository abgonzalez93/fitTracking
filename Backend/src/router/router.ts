import express from 'express'
import userRoutes from '@components/user/route/userRoute'
import dietRoutes from '@components/diet/route/dietRoute'
import { appRoutes } from '@constants/appRoutes'

const router = express.Router()

// Apply router
router.use(appRoutes.apiDiet, dietRoutes)
router.use(appRoutes.apiUsers, userRoutes)

export default router
