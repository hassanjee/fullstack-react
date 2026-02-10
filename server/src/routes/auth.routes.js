import express from 'express'
import { registerUser, getProfile } from '../controllers/user.controller.js'

const authRoutes = express.Router()

authRoutes.post('/register', registerUser)
authRoutes.get('/get-profile', getProfile)

export default authRoutes
