import cookieParser from 'cookie-parser'
import express from 'express'
import cors from 'cors'
import userRoutes from './routes/user.routes.js'
import authUsers from './middleware/authUsers.js'
import authRoutes from './routes/auth.routes.js'

const app = express()

app.use(express.json())
app.use(
   cors({
      origin: [
         'http://localhost:5173',
         'http://localhost:5174',
         'http://localhost:3000',
         'http://192.168.100.191:5173',
         //deploy frontend url here
         'https://resumemake.steelshieldworks.com',
      ],
      credentials: true,
   }),
)
app.use(cookieParser())

app.use('/api/users', authUsers, userRoutes)
app.use('/api/auth', authRoutes)

app.get('/', (req, res) => {
   res.send('Welcome to the Auth Project API')
})

export default app
