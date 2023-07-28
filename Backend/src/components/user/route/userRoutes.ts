// External Libraries
import { Router } from 'express'

// Components { Controllers, Models, Routes, Services, Validations }
import UserController from '@components/user/controller/userController'

const router = Router()

router.get('/', UserController.getAllUsers)
router.post('/', UserController.createUser)
router.get('/:id', UserController.getUser)
router.put('/:id', UserController.updateUser)
router.delete('/:id', UserController.deleteUser)

export default router
