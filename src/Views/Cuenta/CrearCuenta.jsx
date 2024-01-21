import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import video from '../../assets/Videos/videoLogin.mp4';
import logo from '../../assets/logo_black.png';
import './crearCuenta.css';
import { useSpring, animated, a } from '@react-spring/web';
import Swal from 'sweetalert2';
import axios from 'axios';
import backenURL from '../../backend';

function CrearCuenta() {

  const [formData, setFormData] = useState({
    Nombre: '',
    ApellidoPaterno: '',
    ApellidoMaterno: '',
    Correo: '',
    Contrasena: '',
    ConfirmarContrasena: '',
  });

  const [exists, setExists] = useState(null);

  const asideAnimation = useSpring({
    from: { opacity: 0, transform: 'translateX(+100%)' },
    to: { opacity: 1, transform: 'translateX(0)' },
  });

  const navigate = useNavigate();

  /*-------------------------------------- Navegación -------------------------------*/

  const handleClick = () => {
    navigate('/Login');
  };
  const handleCodeVerify = () => {
    navigate('/CodeVerify');
  };

  /*-------------------------------------- Eventos -------------------------------*/
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  /*-------------------------------------- REQUEST AXIOS -------------------------------*/
  const handlePost = async () => {
    // Verificar si todos los campos del formulario están llenos
    const isFormFilled = Object.values(formData).every((value) => value.trim() !== '');

    if (!isFormFilled) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor, completa todos los campos del formulario.',
      });
      return; // Detener el proceso si algún campo está vacío
    }


    // Validar formato de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.Correo)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor, ingresa un correo electrónico válido.',
      });
      return; // Detener el proceso si el correo no es válido
    }

    // Validar que la contraseña tenga al menos 8 caracteres
    if (formData.Contrasena.length < 8) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'La contraseña debe tener al menos 8 caracteres.',
      });
      return; // Detener el proceso si la contraseña es demasiado corta
    }

    // Validar que las contraseñas coincidan
    if (formData.Contrasena !== formData.ConfirmarContrasena) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Las contraseñas no coinciden. Por favor, verifica.',
      });
      return; // Detener el proceso si las contraseñas no coinciden
    }

    //verificar si el correo ya existe
    try {
      const response = await axios.post(backenURL + '/api/validate-email/' + formData.Correo);
      const { exists } = response.data;
      if (exists==true) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'El correo ya existe, por favor ingresa otro.',
        });
        return; // Detener el proceso si el correo ya existe
      }
      if (exists==false) {
        //continue with the process
        
        AgregarUsuario();
        
      }
      
    } catch (error) {
      console.error('Error al realizar la petición:', error);
      // Manejo de errores, puedes mostrar un mensaje al usuario o realizar otras acciones necesarias
    }
    

    // Si todas las validaciones pasan, continuar al siguiente paso
    
  };
  const AgregarUsuario = async () => {
    try {
      const response = await axios.post(backenURL + '/api/user', formData);
      const { status, data } = response;
  
      if (status === 201) {
        // Usuario agregado correctamente, ahora envía el código de verificación
       
        
        // Después de enviar el código, navega a la página de verificación
        navigate('/CodeVerify', { state: { uid: data.uid, email: data.email } });
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
        <p className='parrafo'>Para continuar, por favor crea tu cuenta...</p>
        <div className="containerTitulo">
          <h2 className='TITLE-Login'>Crea tu cuenta, ¡Vamos!</h2>
        </div>
        {Object.keys(formData).map((key) => (
          <input
            key={key}
            type={key.includes('Contrasena') ? 'password' : 'text'}
            className='inputLogin'
            placeholder={key.replace(/([A-Z])/g, ' $1').trim()} // Transforma CamelCase a palabras separadas
            name={key}
            value={formData[key]}
            onChange={handleChange}
          />
        ))}
        <div className="containerCrearCuenta">
          <p className='parrafo'>¿Ya tienes cuenta?  </p>
          <p className='RegistrateAqui' onClick={handleClick}>Inicia sesión</p>
        </div>
        <button className='buttonLogin' onClick={handlePost}>Continuar</button>

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

export default CrearCuenta;
