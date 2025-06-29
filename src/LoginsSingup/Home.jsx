import React from 'react'
import Navbar from './Navbar'
import Login from './Login'
import { useNavigate } from 'react-router'

const Home = () => {
  const navigate=useNavigate()
  const Longout=()=>{
    
    localStorage.removeItem("user")
    navigate("/")
    
  }
  return (
    <>
    <div>
      <Navbar/>
      <div className='home'>
        <h2>Welcome to home page</h2>
        <button onClick={Longout}>Long-out</button>
      </div>
    </div>

    </>
  )
}

export default Home