import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Login');
  }

  return (
    <div className='sss'>
      <h1>Hola</h1>
      
      <button className='buttonApp' onClick={handleClick}>Comenzar</button>
    </div>
  )
}

export default Login