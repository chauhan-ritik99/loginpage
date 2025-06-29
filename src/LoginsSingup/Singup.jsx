import React, { useState } from 'react'
import main from '../assets/image/loginimg.jpg'
import Navbar from './Navbar'
import { useNavigate } from 'react-router'
const Singup = () => {

  const userdetail={
    name:"",
    email:"",
    password:"",
  }
  const [data,setData]=useState(userdetail)

  const navigate=useNavigate()

  const handelinput=(event)=>{
    // console.log(event.target.value);
    // console.log(event.target.name);

    const name=event.target.name
    const value=event.target.value

    setData({...data, [name]:value})
    
  }
    const handleSubmit=(event)=>{
      event.preventDefault()
      if(data.name=="" || data.email==""|| data.password==""){
       alert("enter fill detalis")
      }

      else{

      const getdata = JSON.parse(localStorage.getItem("user")||"[]")
      let arr=[]
      arr=[...getdata]
      arr.push(data)
       localStorage.setItem("user",JSON.stringify(arr))

       alert("Singup Successfully")

       navigate("/login")


      }


    }

    return (
    <>
      <Navbar/>
    
    <div className='main-page'>
        <form onSubmit={handleSubmit}>
            <div className='heading'>
                <p>Sing-up</p>
            </div>
            <div className='account'>
                <input type='text' name='name' placeholder='enter the name' onChange={handelinput}/>
                  <input type='email' name='email' placeholder='enter the email'  onChange={handelinput}/>
                    <input type='password' name='password' placeholder='enter the password'  onChange={handelinput}/>

                 <p>Allready have an account - <a href='/login'>Login</a></p>
            </div>
            <button>Sing-up</button>
        </form>
           
         <div>
            
            <img src={main} alt='' />
        </div>
    </div>
    </>
  )
}

export default Singup