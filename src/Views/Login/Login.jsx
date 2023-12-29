import { useNavigate } from 'react-router-dom';
import video from '../../assets/Videos/videoLogin.mp4'
import logo from '../../assets/logo_black.png'
import './login.css'

import { useSpring, animated } from '@react-spring/web';

function Login() {
    // Define la animación para la entrada del aside
    const asideAnimation = useSpring({
      from: { opacity: 0, transform: 'translateX(-100%)' },
      to: { opacity: 1, transform: 'translateX(0)' },
    });

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Login');
  }

  return (
    <body className='bodyApp'>
      <animated.aside style={asideAnimation} className="aside-container">
        <img src={logo} alt="Logo" className="logoLogin" />
        <p className='parrafo'>Para continuar, por favor identifícate...</p>
        <div className="containerTitulo">
          <div className="line"></div>
          <h2>Inicia Sesión</h2>
          <div className="line"></div>
        </div>
        <input type="text" placeholder="Usuario" />
        <input type="text" placeholder="Contraseña" />
        <p className='parrafo'>¿Olvidaste tu contraseña?</p>
        <p className='parrafo'>¿No tienes cuenta?</p><p className='RegistrateAqui'>Registrate aquí</p>
      </animated.aside>
      <div id="video-background">

        <video autoPlay loop muted className="video">
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="overlay"></div>


    </body>
  )
}

export default Login