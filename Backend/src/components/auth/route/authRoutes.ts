// External Libraries
import { Router } from 'express'

// Components { Controllers, Models, Routes, Services, Validations }
import authController from '@components/auth/controller/authController'

const router = Router()

router.post('/login', authController.login)
router.post('/register', authController.register)

export default router
