import React from 'react'
import "./index.css"
import Singup from './LoginsSingup/Singup'
import Login from './LoginsSingup/Login'
import Home from './LoginsSingup/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
const App = () => {
  return (
  <>
  
  <BrowserRouter>
  
  <Routes>
    <Route path='/' element={<Singup/>}/>
    <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
  </Routes>
  </BrowserRouter>

  
  </>
  )
}

export default App