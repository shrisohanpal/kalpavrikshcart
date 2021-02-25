import express from 'express'
const router = express.Router()
import
{
    getCategorys,
    createCategory,
    deleteCategory,
    updateCategory
} from '../controllers/categoryController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getCategorys).post(createCategory)
router.route('/:id').delete(deleteCategory).put(updateCategory)

export default router 