import express from 'express'
const router = express.Router()
import
{
    getShops,
    getShopById,
    deleteShop,
    createShop,
    updateShop
} from '../controllers/shopController.js'
// import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getShops).post(createShop)
router.route('/:id').get(getShopById).delete(deleteShop).put(updateShop)

export default router