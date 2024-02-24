import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import Header from '../../../Components/Header/Header.jsx'

import Menu from '../../../Components/Menu/Menu.jsx'

import Swal from 'sweetalert2';

import './configInicial.css';
import luz from '../../../assets/Components/ConfigInitial/luz.png';

function ScreenLuzConfig() {

    const navigate = useNavigate();
    const nombre = localStorage.getItem('nombre');
    const email = localStorage.getItem('email');
    const avatar = localStorage.getItem('avatar');
    const token = localStorage.getItem('token');

    // Definimos los estados para los valores seleccionados
    const [origen, setOrigen] = useState('');
    const [tipo, setTipo] = useState('');


    // Definición del estado para el valor de la luz
    const [valorLuz, setLuz] = useState(0);

    // Manejador de eventos para el cambio del valor de la luz
    // Manejador de eventos para el cambio del valor de la luz
    const handleLuzChange = (e) => {
        const newValue = e.target.value; // Nuevo valor del rango
        setLuz(newValue); // Actualizar el estado con el nuevo valor
    };



    useEffect(() => {
        // Aquí puedes colocar cualquier lógica que necesites
        // Por ejemplo, verificar si el usuario tiene permisos para estar en esta vista
    }, [navigate]);

    // Función para manejar el envío del formulario
    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes enviar los datos del formulario a donde necesites

        submitBackend();
    };

    const goToCicloLuz = () => {
        navigate('/Settings/LightCycle');
    };

    const submitBackend = () => {
        // Aquí puedes colocar la lógica para eliminar la cepa
        //soicitando al backend

        // Una vez que se elimine la cepa, redirigir al usuario a la vista de MisCepas
        Swal.fire({
            icon: 'success',
            title: '¡Éxito!',
            text: 'El cultivo ha sido creado exitosamente',
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
            navigate('/MisCepas');
        });
    };

    return (
        <body className='bodyHome'>
            <nav className='navHome'>
                <Menu />
            </nav>
            <main className='mainHome'>
                <header className='headerHome'>
                    <Header titulo="Configuración del cultivo" nombre={nombre} email={email} avatar={avatar} />
                </header>
                <div className="containerAgregarCepas">
                    <div className="containerSettingsLuz">
                        <h1 className="titleAddCepa">Configuración de luz</h1>
                        <p className="textAddCepa">¿Cual deseas que sea la intensidad de la lámpara inicialmente?</p>
                        <div className="containerLuzSettingsCenter">
                            <h1 className='ValueLight'>{valorLuz} %</h1>
                            <input
                                type="range"
                                id="luzIntensity"
                                min="0"
                                max="100"
                                value={valorLuz}
                                // Asignar el valor actual de la luz al rango
                                onChange={handleLuzChange} // Manejador de eventos para el cambio de la luz
                            />
                       // Dentro de tu componente React
                            <img
                                src={luz}
                                alt=""
                                className="imgLuzSettings"
                                style={{ opacity: `${valorLuz / 100}` }} // Establecer la opacidad en función del valor de la luz
                            />

                        </div>
                        <div className="containerLuzBottomSettings">

                            <button className="btnFormAddCepa" id='aceptar' onClick={goToCicloLuz}>Siguiente</button>
                        </div>
                    </div>
                </div>
            </main>
        </body>
    );
}

export default ScreenLuzConfig;
