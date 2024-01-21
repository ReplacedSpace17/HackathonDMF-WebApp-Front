import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import video from '../../assets/Videos/videoLogin.mp4';
import logo from '../../assets/logo_black.png';
import './CompleteProfile.css';
import { useSpring, animated } from '@react-spring/web';
import axios from 'axios';
import backenURL from '../../backend';
import { useLocation } from 'react-router-dom';

import avatar1 from '../../assets/Avatars/avatar1.png';
import avatar2 from '../../assets/Avatars/avatar2.png';
import avatar3 from '../../assets/Avatars/avatar3.png';
import avatar4 from '../../assets/Avatars/avatar4.png';

function CompleteProfile() {
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


  const handleCodeVerify = () => {
    navigate('/CodeVerify');
  };

  const handleAvatar = (value) => {
    setAvatar(value);
    //alert(avatarName);
  };
  const handleBirthdateChange = (event) => {
    setBirthdate(event.target.value);
  };

  /* Post form */
  const handlePost = async () => {
    const formData = {
      birthdate: birthdate,
      avatarName: avatarName,
    };
    try {
      const response = await axios.post(backenURL + '/api/final-new-user/' + uid, formData);
      const { status, data } = response;

      if (status === 200) {
        navigate('/Home');
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
