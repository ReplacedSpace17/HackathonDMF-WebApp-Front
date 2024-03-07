/*------------------------------------ IMPORTS REACT ------------------------------------*/
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useSpring, animated } from '@react-spring/web';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/*------------------------------------ ASSETS ------------------------------------*/
import avatar1 from '../../assets/Avatars/avatar1.png';
import avatar2 from '../../assets/Avatars/avatar2.png';
import avatar3 from '../../assets/Avatars/avatar3.png';
import avatar4 from '../../assets/Avatars/avatar4.png';
import backenURL from '../../backend';
import video from '../../assets/Videos/videoLogin.mp4';
import logo from '../../assets/logo_black.png';
import './CompleteProfile.css';

import { getDatabase, ref, set, push } from 'firebase/database';


/*------------------------------------ COMPONENTE ------------------------------------*/

function CompleteProfile() {
  /*-------------------------------------- STATES -------------------------------*/
  const location = useLocation();
  const uid = location.state?.uid;
  const email = location.state?.email;
  const [avatarName, setAvatar] = useState('');
  const [birthdate, setBirthdate] = useState(''); // Agrega el estado para la fecha de nacimiento

 


  const asideAnimation = useSpring({
    from: { opacity: 0, transform: 'translateX(+100%)' },
    to: { opacity: 1, transform: 'translateX(0)' },
  });

  const navigate = useNavigate();

  const handleAvatar = (value) => {
    setAvatar(value);
    //alert(avatarName);
  };

  const handleBirthdateChange = (event) => {
    setBirthdate(event.target.value);
  };

  /*-------------------------------------- REQUEST AXIOS -------------------------------*/
  const handlePost = async () => {
    // Verificar si todos los campos del formulario están llenos
    if (!birthdate) {
      // Mostrar una alerta si no se ha ingresado la fecha de nacimiento
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, ingresa tu fecha de nacimiento antes de continuar.',
      });
      return;
    }
    if (!avatarName) {
      // Mostrar una alerta si no se ha seleccionado un avatar
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, selecciona un avatar antes de continuar.',
      });
      return;
    }

    const formData = {
      birthdate: birthdate,
      avatarName: avatarName,
    };

    try {
      const response = await axios.post(backenURL + '/api/final-new-user/' + uid, formData);
      const { status, data } = response;

      if (status === 200) {

        //Agregar el user a firebase
        AddUserFirebase(uid, email);
        //necesito un swal que cuando de clic en aceptar me redireccione a la pagina de home
        Swal.fire({
          icon: 'success',
          title: 'Cuenta creada',
          text: 'Tu cuenta ha sido creada exitosamente.',
          showConfirmButton: true,
          confirmButtonText: 'Finalizar registro',
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/Login');
          }
        });
      }
    } catch (error) {
      console.error('Error al realizar la petición:', error);
      // Manejo de errores, puedes mostrar un mensaje al usuario o realizar otras acciones necesarias
    }
  };

  const AddUserFirebase = (id, email) => {
    const db = getDatabase();
        // Referencia al nodo específico en la base de datos donde deseas escribir los datos
        const usuariosRef = ref(db, 'BioharvestApp/Usuarios/' + id);
        // Datos que deseas almacenar en el nodo del cultivo
        const usuariosData = {
            UserEmail: email,
        };

        // Intentar establecer los datos en la base de datos
        set(usuariosRef, usuariosData)
            .then(() => {
                console.log('Datos escritos correctamente.');
            })
            .catch((error) => {
                console.error('Error al escribir datos del cultivo:', error);
                // Manejar el error, puedes mostrar un mensaje al usuario o realizar otras acciones necesarias
            });
  };

  /*-------------------------------------- RENDER COMPONENT -------------------------------*/

  return (
    <body className='bodyAppAcount'>
      <animated.aside style={asideAnimation} className="aside-container">
        <img src={logo} alt="Logo" className="logoLogin" />
        <p className='parrafo'>Para finalizar completa tu perfil</p>
       
        <div className="containerTitulo">
          <h2 className='TITLE-Login'>Completa tu perfil</h2>
        </div>
        <input
          className='inputLogin'
          type="date"
          placeholder="Fecha de nacimiento"
          value={birthdate}
          onChange={handleBirthdateChange}
        />
        <p className='parrafo'>Selecciona tu avatar</p>
        <div className="containerAvatar">
          <img src={avatar1} alt="Avatar" className={`avatar ${avatarName === 'avatar1' ? 'avatarSelected' : ''}`} onClick={() => handleAvatar('avatar1')} />
          <img src={avatar2} alt="Avatar" className={`avatar ${avatarName === 'avatar2' ? 'avatarSelected' : ''}`} onClick={() => handleAvatar('avatar2')} />
          <img src={avatar3} alt="Avatar" className={`avatar ${avatarName === 'avatar3' ? 'avatarSelected' : ''}`} onClick={() => handleAvatar('avatar3')} />
          <img src={avatar4} alt="Avatar" className={`avatar ${avatarName === 'avatar4' ? 'avatarSelected' : ''}`} onClick={() => handleAvatar('avatar4')} />
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


export default CompleteProfile;
