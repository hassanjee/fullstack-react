import express from 'express'
import { registerUser } from '../controllers/user.controller.js'

const userRoutes = express.Router()

// Example route
userRoutes.get('/profile', (req, res) => {
   res.json({ message: 'User profile data' })
})

userRoutes.post('/register', async (req, res) => {
   try {
      const result = await registerUser(req.body)
      if (result.error)
         return res.status(result.status).json({ error: result.error })
      res.status(result.status).json(result.data)
   } catch (error) {
      res.status(500).json({ error: error.message })
   }
})

export default userRoutes
