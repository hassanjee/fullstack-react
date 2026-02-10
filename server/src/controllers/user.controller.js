import User from '../db/user.model.js'
import bcrypt from 'bcryptjs'

const registerUser = async (req, res) => {
   const { username, password, email, role = 'user' } = req.body
   // Validate input (this is just a placeholder, implement your validation logic)
   if (!username || !password || !email) {
      return res.status(400).json({ error: 'All fields are required' })
   }

   // Check if the username or email already exists in the database
   const existingUser = await User.findOne({ $or: [{ username }, { email }] })
   if (existingUser) {
      return res.status(400).json({ error: 'Username or email already exists' })
   }

   //email validation
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
   if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' })
   }

   const salt = await bcrypt.genSalt(10)
   const hashedPassword = await bcrypt.hash(password, salt)

   // Create a new user instance and save it to the database
   const newUser = new User({ username, password: hashedPassword, email, role })
   try {
      await newUser.save() // Exclude the password field from the response
      return res.status(201).json({
         message: 'User registered successfully',
      })
   } catch (error) {
      return res.status(500).json({
         message: 'Error registering user',
         error: error.message,
      })
   }
}

// const getProfile = async (req, res) => {
//    try {
//       // const { userId } = req.body
//       const userData = await User.find().select('-password')
//       res.json({ success: true, userData })
//    } catch (error) {
//       res.json({ success: false, message: error.message })
//    }
// }

const getProfile = (req, res) => {
   res.json({ message: 'Profile data retrieved successfully' })
}

export { registerUser, getProfile }
