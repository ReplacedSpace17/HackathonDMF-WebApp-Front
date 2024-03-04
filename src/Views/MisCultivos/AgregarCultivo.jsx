import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import foto from '../../assets/img.png'
import SpecieIcon from '../../assets/Components/Icons/especie.svg';
import CultivoIcon from '../../assets/Components/Icons/cultivo.svg';
import BiomasaIcon from '../../assets/Components/Icons/biomasa.svg';
import Header from '../../Components/Header/Header.jsx'
import CardInfoTop from '../../Components/CardsInfo/cardTop.jsx'
import Menu from '../../Components/Menu/Menu.jsx'

import Swal from 'sweetalert2';
import axios from 'axios';
import backenURL from '../../backend.js';

function AgregarCultivo() {
    const [cepas, setCepas] = useState([]);

    const navigate = useNavigate();
    const nombre = localStorage.getItem('nombre');
    const email = localStorage.getItem('email');
    const avatar = localStorage.getItem('avatar');
    const token = localStorage.getItem('token');
    const uid = localStorage.getItem('uid');
    // Definimos los estados para los valores seleccionados
    const [especie, setEspecie] = useState('');
    const [tipo, setTipo] = useState('');

    useEffect(() => {
        if (!token) {
            // Si no hay token, redirigir al usuario a la página de inicio de sesión
            navigate('/Login');
        }

        obtenerCepas(uid);
        // Aquí puedes colocar cualquier lógica que necesites
        // Por ejemplo, verificar si el usuario tiene permisos para estar en esta vista
    }, [navigate]);

    // Función para manejar el envío del formulario
    const handleFormSubmit = (e) => {
        e.preventDefault();
        // construir el formData con los valores del formulario cepa_id, user_id, nombre, motivo 
        const formData = {
            nombre: e.target[0].value,
            cepa_id: especie,
            motivo: tipo,
            user_id: uid
        }
        //validar que los campos no esten vacios
        if (formData.nombre === '' || formData.cepa_id === '' || formData.motivo === '') {
            Swal.fire({
                title: 'Error!',
                text: 'Todos los campos son obligatorios',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
            return;
        }

        console.log(formData);

        InsertarNuevoCultivo(formData);
        
    };

    const regresar = () => {
        navigate('/MisCultivos');
    };

    const InsertarNuevoCultivo = async (formData) => {
        try {
            const response = await axios.post(backenURL + '/api/cultivos/', formData);
            // Verificar el código de estado de la respuesta
            if (response.status === 201) {
                //Mostrar un swal para indicar que la cepa ha sido agregada exitosamente y despues redirigir al usuario a la vista de MisCepas
                Swal.fire({
                    icon: 'success',
                    title: '¡Éxito!',
                    text: 'Se ha creado exitosamente',
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    //obtener el response.data.cultivo_id y redirigir al usuario a la vista de MisCepas
                    const idCultivo = response.data.cultivo_id;
                    
                    console.log(idCultivo);
                    //crear un bucken en firebase para el cultivo con el id
                    navigate('/Settings/Introduction');
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

    const obtenerCepas = async (id_user) => {
        try {
            const response = await axios.get(backenURL + '/api/cepas/user/' + id_user);
            // Verificar el código de estado de la respuesta
            if (response.status === 200) {
                // Asignar la respuesta al estado de cepas
                setCepas(response.data);
                console.log(response.data);
            }
        } catch (error) {
            // Error en la solicitud
            if (error.response) {
                // El servidor ha respondido con un código de estado fuera del rango 2xx
                // Aquí puedes manejar diferentes códigos de estado de error
                if (error.response.status === 401) {
                    // Lógica para el caso de error 400

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

    return (
        <body className='bodyHome'>
            <nav className='navHome'>
                <Menu />
            </nav>
            <main className='mainHome'>
                <header className='headerHome'>
                    <Header titulo="Mis cultivos" nombre={nombre} email={email} avatar={avatar} />
                </header>
                <div className="containerAgregarCepas">
                    <div className="containerFormAddCepa">
                        <h1 className="titleAddCepa">Crear nuevo cultivo</h1>
                        <p className="textAddCepa">Por favor ingresa la información</p>
                        <form className="formAddCepa" onSubmit={handleFormSubmit}>
                            <div className="containerInputAddCepa">
                                <p className='textInput'>Nombre del cultivo</p>
                                <input type="text" placeholder="Nombre del cultivo" className="inputAddCepa" />
                            </div>
                            <div className="containerInputAddCepa">
                                <p className='textInput'>Especie</p>
                                <select value={especie} onChange={(e) => setEspecie(e.target.value)} className="inputAddCepa">
                                    <option value="">Selecciona especie</option>
                                    {cepas.map((cepa) => (
                                        <option key={cepa.id} value={cepa.id}>{cepa.nombre}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="containerInputAddCepa">
                                <p className='textInput'>Motivo</p>
                                <select value={tipo} onChange={(e) => setTipo(e.target.value)} className="inputAddCepa">
                                    <option value="">Selecciona Tipo</option>
                                    <option value="Investigación">Investigación</option>
                                    <option value="Comercialización">Comercialización</option>

                                </select>
                            </div>
                            <div className="containerBtnFormAddCepa">
                                <button className="btnFormAddCepa" id='cancelar' onClick={regresar}>Cancelar</button>
                                <button type="submit" className="btnFormAddCepa" id='aceptar'>Crear</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </body>
    );
}

export default AgregarCultivo;
