// External Libraries
import { Router } from 'express'

// Components { Controllers, Models, Routes, Services, Validations }
import dietController from '@api/controllers/dietController'

const router = Router()

router.get('/', dietController.getAllDiets)
router.post('/', dietController.createDiet)
// router.get('/:id', dietController.getDiet)
// router.put('/:id', dietController.updateDiet)
// router.delete('/:id', dietController.deleteDiet)

export default router
