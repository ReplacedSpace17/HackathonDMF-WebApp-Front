import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useNavigate } from 'react-router-dom';
import Login from './Views/Login/Login'
import video from './assets/Videos/videoLogin.mp4'
import logo  from './assets/Logo.png'

//-------------------------------assets
import LogoHeader  from './assets/Pages/InitialPage/LogoHeader.png'
import Image  from './assets/Pages/InitialPage/Image.png'


function App() {
  
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Login');
  }


  return (
  <body className='bodyApp'>
   <div classname="containerLeft">
    <h1>djndjndj</h1>
   </div>
   <div classname="containerRight">
   </div>





  </body>
  
  )
}

export default App
