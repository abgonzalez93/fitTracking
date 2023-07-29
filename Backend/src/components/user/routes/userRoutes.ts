// External Libraries
import { Router } from 'express'

// Components { Controllers, Models, Routes, Services, Validations }
import userController from '@components/user/controller/userController'

const router = Router()

router.get('/', userController.getAllUsers)
router.post('/', userController.createUser)
router.get('/:id', userController.getUser)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)

export default router
