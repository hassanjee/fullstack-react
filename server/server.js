import app from './src/app.js'
import 'dotenv/config'
import connectDB from './src/db/db.js'

// connectDB()

app.get('/', (req, res) => {
   res.send(`<h1>Welcome to the Auth API</h1>
   <p>Use the following endpoints to interact with the API:</p>
   <ul>
      <li><strong>POST /api/auth/register</strong>: Register a new user.</li>
      <li><strong>POST /api/auth/login</strong>: Log in an existing user.</li>
      <li><strong>POST /api/auth/logout</strong>: Log out the current user.</li>
      <li><strong>GET /api/auth/profile</strong>: Get the profile of the logged-in user (requires authentication).</li>
   </ul>`)
})

const PORT = process.env.PORT
app.listen(PORT, () => {
   console.log(`Server is running on port http://localhost:${PORT}`)
})
