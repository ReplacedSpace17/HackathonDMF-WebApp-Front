import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import Header from '../../../Components/Header/Header.jsx'

import Menu from '../../../Components/Menu/Menu.jsx'

import Swal from 'sweetalert2';

import './configInicial.css';
import luz from '../../../assets/Components/ConfigInitial/cicloIMG.png';

import { getDatabase, ref, set, push } from 'firebase/database';


function ScreenCicloLuzConfig() {

    const navigate = useNavigate();
    const nombre = localStorage.getItem('nombre');
    const email = localStorage.getItem('email');
    const avatar = localStorage.getItem('avatar');
    const token = localStorage.getItem('token');


    const uid = localStorage.getItem('uid');
    const cultivo_id = localStorage.getItem('newCultivoId');

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

    const goToPhYes = () => {
        setCicloLuz(uid, cultivo_id, true);
        navigate('/Settings/Ph');
    };
    const goToPhNo = () => {
        setCicloLuz(uid, cultivo_id, false);
        navigate('/Settings/Ph');
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

    const setCicloLuz = (UID, CID, valor) => {

        // Obtener una referencia a la base de datos de Firebase
        const db = getDatabase();
        // Referencia al nodo específico en la base de datos donde deseas escribir los datos
        const LuzClicloRef = ref(db, 'BioharvestApp/Usuarios/' + UID +  '/Fotobiorreactores/'+ CID+'/Parameters/CicloDiaNoche');
        // Datos que deseas almacenar en el nodo del cultivo
        const LuzCicloData = {
            CicloDiaNoche: valor
        };

        // Intentar establecer los datos en la base de datos
        set(LuzClicloRef, valor)
            .then(() => {
                console.log('Datos del cultivo escritos correctamente.');
            })
            .catch((error) => {
                console.error('Error al escribir datos del cultivo:', error);
                // Manejar el error, puedes mostrar un mensaje al usuario o realizar otras acciones necesarias
            });

            //createFotoBiorreactor(UID, "sxnxj");
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
                        <h1 className="titleAddCepa">Ciclo de iluminación</h1>
                        <p className="textAddCepa">¿Deseas que el fotobiorreactor tenga un ciclo de iluminación de día y noche?</p>
                        <div className="containerLuzSettingsCenter">
                            
                            
                       // Dentro de tu componente React
                            <img
                                src={luz}
                                alt=""
                                className="imgCicloSettings"
                                // Establecer la opacidad en función del valor de la luz
                            />

                        </div>
                        <div className="containerCicloBottomSettings">
                        <button className="btnFormAddCepa" id='aceptar' onClick={goToPhNo}>Por ahora no</button>
                            <button className="btnFormAddCepa" id='aceptar' onClick={goToPhYes}>Claro</button>
                        </div>
                    </div>
                </div>
            </main>
        </body>
    );
}

export default ScreenCicloLuzConfig;
