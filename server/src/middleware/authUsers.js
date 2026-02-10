const authUsers = (req, res, next) => {
   // Check if the user is authenticated (this is just a placeholder, implement your logic)
   const isAuthenticated = true // Replace with actual authentication check
   if (isAuthenticated) {
      next() // User is authenticated, proceed to the next middleware or route handler
   } else {
      res.status(401).json({ message: 'Unauthorized' }) // User is not authenticated, return an error response
   }
}

export default authUsers
