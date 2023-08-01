// External Libraries
import { Router } from 'express'

// Components { Controllers, Models, Routes, Services, Validations }
import authController from '@components/auth/controller/authController'

const router = Router()

router.post('/login', authController.login)
// router.post('/logout', authController.logout)
router.post('/register', authController.register)
router.post('/refresh', authController.refresh)

export default router
