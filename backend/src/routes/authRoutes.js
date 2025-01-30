import express from 'express'
import { registerUser, loginUser, getUserData } from '../controllers/authController.js'
import { authenticateToken } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.post('/usuarios', registerUser)
router.post('/login', loginUser)
router.get('/usuarios', authenticateToken, getUserData)

export default router