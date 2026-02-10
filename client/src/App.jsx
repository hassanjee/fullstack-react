import { useState, useEffect } from 'react'

import './App.css'
import axios from 'axios'

function App() {
   const [message, setMessage] = useState('')

   useEffect(() => {
      axios.get('http://server:4000/api/auth/get-profile').then((response) => {
         const userData = response.data.message
         setMessage(userData)
      })
   }, [])

   return (
      <>
         <h1>Welcome to the Frontend !!</h1>
         <h3>Data from Backend : {message}</h3>
      </>
   )
}

export default App
