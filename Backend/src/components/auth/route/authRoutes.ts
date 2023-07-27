import { Router } from 'express'
import authController from '@components/auth/controller/authController'

const router = Router()

// Define your routes
router.post('/login', authController.login)
router.post('/register', authController.register)

export default router
