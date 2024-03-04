import React, { useEffect, useState } from 'react';
import './MisCepas.css';
import { useNavigate } from 'react-router-dom';
import foto from '../../assets/img.png'
import SpecieIcon from '../../assets/Components/Icons/especie.svg';
import CultivoIcon from '../../assets/Components/Icons/cultivo.svg';
import BiomasaIcon from '../../assets/Components/Icons/biomasa.svg';
import Header from '../../Components/Header/Header.jsx'
import CardInfoTop from '../../Components/CardsInfo/cardTop.jsx'
import Menu from '../../Components/Menu/Menu.jsx'
import backenURL from '../../backend.js';
import Swal from 'sweetalert2';
import axios from 'axios';

function AgregarCepa() {

    const navigate = useNavigate();
    const nombre = localStorage.getItem('nombre');
    const email = localStorage.getItem('email');
    const avatar = localStorage.getItem('avatar');
    const token = localStorage.getItem('token');
    const uid = localStorage.getItem('uid');

    // Definimos los estados para los valores seleccionados
    const [origen, setOrigen] = useState('');
    const [tipo, setTipo] = useState('');

    useEffect(() => {
        if (!token) {
            // Si no hay token, redirigir al usuario a la página de inicio de sesión
            navigate('/Login');
        }
        
        // Aquí puedes colocar cualquier lógica que necesites
        // Por ejemplo, verificar si el usuario tiene permisos para estar en esta vista
    }, [navigate]);

    // Función para manejar el envío del formulario
    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes enviar los datos del formulario a donde necesites
        //obtener los valores de los inputs
        const especie = e.target[0].value;
        const origen = e.target[1].value;
        const tipo = e.target[2].value;
        // construir el formData con los user_id, nombre, origen, medio 
        const formData = {
            user_id: uid,
            nombre: especie,
            origen: origen,
            medio: tipo
        };
        console.log(formData);
        // Verificar si todos los campos del formulario están llenos
        for (const key in formData) {
            if (formData[key] === '') {
                Swal.fire({
                    title: 'Error!',
                    text: 'Por favor llena todos los campos',
                    icon: 'error',
                    confirmButtonText: 'Aceptar'
                });
                return;
            }
        }
        //Enviar el formData al backend
         InsertarNuevaCepa(formData);
    };

    const InsertarNuevaCepa = async (formData) => {
        try {
            const response = await axios.post(backenURL + '/api/cepas/', formData);
            // Verificar el código de estado de la respuesta
            if (response.status === 201) {
                //Mostrar un swal para indicar que la cepa ha sido agregada exitosamente y despues redirigir al usuario a la vista de MisCepas
                Swal.fire({
                    icon: 'success',
                    title: '¡Éxito!',
                    text: 'La cepa ha sido agregada exitosamente',
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    navigate('/MisCepas');
                });
            }
        } catch (error) {
            // Error en la solicitud
            if (error.response) {
                // El servidor ha respondido con un código de estado fuera del rango 2xx
                // Aquí puedes manejar diferentes códigos de estado de error
                if (error.response.status === 401) {
                    // Lógica para el caso de error 400
                    Swal.fire({
                        title: 'Error!',
                        text: 'Las credenciales son inválidas',
                        icon: 'error',
                        confirmButtonText: 'Aceptar'
                    });
                } else {
                    // Otros códigos de estado de error
                    Swal.fire({
                        title: 'Error!',
                        text: 'Error en la solicitud',
                        icon: 'error',
                        confirmButtonText: 'Cool'
                    });
                }
            } else {
                // Error sin respuesta del servidor
                console.error('Error al realizar la petición:', error);
                // Manejo de errores, puedes mostrar un mensaje al usuario o realizar otras acciones necesarias
            }
        }
    };



    const regresar = () => {
        navigate('/MisCepas');
    };

    const submitBackend = () => {
        // Aquí puedes colocar la lógica para eliminar la cepa
        //soicitando al backend

        // Una vez que se elimine la cepa, redirigir al usuario a la vista de MisCepas
        Swal.fire({
            icon: 'success',
            title: '¡Éxito!',
            text: 'La cepa ha sido agregada exitosamente',
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
                    <Header titulo="Mis cepas" nombre={nombre} email={email} avatar={avatar} />
                </header>
                <div className="containerAgregarCepas">
                    <div className="containerFormAddCepa">
                        <h1 className="titleAddCepa">Agregar Cepa</h1>
                        <p className="textAddCepa">Por favor ingresa la información</p>
                        <form className="formAddCepa" onSubmit={handleFormSubmit}>
                            <div className="containerInputAddCepa">
                                <p className='textInput'>Especie</p>
                                <input type="text" placeholder="Nombre de la cepa" className="inputAddCepa" />
                            </div>
                            <div className="containerInputAddCepa">
                                <p className='textInput'>Origen de la cepa</p>
                                <select value={origen} onChange={(e) => setOrigen(e.target.value)} className="inputAddCepa">
                                    <option value="">Selecciona Origen</option>
                                    <option value="Adquirida">Adquirida</option>
                                    <option value="Cultivada">Cultivada</option>

                                </select>
                            </div>
                            <div className="containerInputAddCepa">
                                <p className='textInput'>Tipo de la cepa</p>
                                <select value={tipo} onChange={(e) => setTipo(e.target.value)} className="inputAddCepa">
                                    <option value="">Selecciona Tipo</option>
                                    <option value="Dulce">Agua dulce</option>
                                    <option value="Salada">Agua salada</option>

                                </select>
                            </div>
                            <div className="containerBtnFormAddCepa">
                                <button className="btnFormAddCepa" id='cancelar' onClick={regresar}>Cancelar</button>
                                <button type="submit" className="btnFormAddCepa" id='aceptar'>Agregar Cepa</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </body>
    );
}

export default AgregarCepa;
