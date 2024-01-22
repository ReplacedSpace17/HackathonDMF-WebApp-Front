import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import video from '../../assets/Videos/videoLogin.mp4';
import logo from '../../assets/logo_black.png';
import './crearCuenta.css';
import { useSpring, animated } from '@react-spring/web';

import Swal from 'sweetalert2';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import backenURL from '../../backend';

function CodeVerify() {

  const location = useLocation();
  const uid = location.state?.uid;
  const email = location.state?.email;
  const [timeRemaining, setTimeRemaining] = useState(120); // 2 minutos en segundos
  const [code, setCode] = useState('');
  const asideAnimation = useSpring({
    from: { opacity: 0, transform: 'translateX(+100%)' },
    to: { opacity: 1, transform: 'translateX(0)' },
  });

  const [formData, setFormData] = useState({
    code: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const handleReenviarCode = () => {
    
    setTimeRemaining(120); // Reiniciar el contador a 2 minutos
  };

  const handleEnviarCode = async () => {
    setTimeRemaining(120);
    try {
      Swal.fire({
        icon: 'success',
        title: 'Enviado',
        text: 'Se ha enviado un códifo de verificación a tu correo electrónico.',
      });
      const response = await axios.post(backenURL + '/api/validate-code/' + email);
      
    } catch (error) {
      console.error('Error al realizar la petición:', error);
      // Manejo de errores, puedes mostrar un mensaje al usuario o realizar otras acciones necesarias
    }
    
  };



  useEffect(() => {
    
    const intervalId = setInterval(() => {
      setTimeRemaining((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    
    
    return () => clearInterval(intervalId);
  }, []);


  const handlePost = async () => {
    if (formData.code.trim() === '') {
      // Mostrar una alerta si el código está en blanco
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, ingresa un código de verificación antes de enviar.',
      });
      return;
    }

    //validar si el tiempo es mayor a 0
    if (timeRemaining == 0) {
      //Muestra una alerta si el tiempo es mayor a 0
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'El tiempo de verificación ha terminado, envía un nuevo código.',
      });
      return;
    }

    try {
      const response = await axios.post(backenURL + '/api/activate-user/' + email, formData);
      const { status, data } = response;

      if (status === 200) {
        navigate('/CompleteProfile', { state: { uid: uid, email: email } });
      }
      if (status === 201) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'El código es incorrecto, por favor verifica.',
        });
      }
    } catch (error) {
      console.error('Error al realizar la petición:', error);
      // Manejo de errores, puedes mostrar un mensaje al usuario o realizar otras acciones necesarias
    }
  };
  
  return (
    <body className='bodyAppAcount'>
      <animated.aside style={asideAnimation} className="aside-container">
        <img src={logo} alt="Logo" className="logoLogin" />
        <p className='parrafo'>Se ha enviado un código de activación al email</p>
        <div className="containerTitulo">
          <h2 className='TITLE-Login'>Ingresa el código de activación</h2>
        </div>
        <input
          type="text"
          className='inputLogin'
          placeholder="Código de verificación"
          name="code"
          value={formData.code}
          onChange={handleChange}
        />
        <div className="parrafo">Tiempo restante: {Math.floor(timeRemaining / 60)}:{(timeRemaining % 60).toString().padStart(2, '0')}</div>
        <div className="containerCrearCuenta">
          <p className='parrafo'>¿No se ha enviado?</p>
          <p className='RegistrateAqui' onClick={handleEnviarCode}>Enviar de nuevo</p>
        </div>
        <button className='buttonLogin' onClick={handlePost}>
          Validar
        </button>
      </animated.aside>
      <div id="video-background">
        <video autoPlay loop muted className="video">
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="overlay"></div>
    </body>
  );
}

export default CodeVerify;
