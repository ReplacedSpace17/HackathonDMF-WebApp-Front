import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Login from './Views/Login/Login'
import video from './assets/Videos/videoLogin.mp4'
import logo  from './assets/Logo.png'

function App() {
  


  return (
  <body className='bodyApp'>
     <div className="container-Logo">
      <img className='logoApp' src={logo}/>
      <button className='buttonApp'>Iniciar aplicación</button>
     </div>
      <div id="video-background">
        
        <video autoPlay loop muted className="video">
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="overlay"></div>
     
  
  </body>
  
  )
}

export default App
