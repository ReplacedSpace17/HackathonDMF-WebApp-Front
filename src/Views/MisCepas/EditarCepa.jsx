import React, { useEffect, useState } from 'react';
import './MisCepas.css';
import { useNavigate, useLocation } from 'react-router-dom';
import foto from '../../assets/img.png'
import SpecieIcon from '../../assets/Components/Icons/especie.svg';
import CultivoIcon from '../../assets/Components/Icons/cultivo.svg';
import BiomasaIcon from '../../assets/Components/Icons/biomasa.svg';
import Header from '../../Components/Header/Header.jsx'
import CardInfoTop from '../../Components/CardsInfo/cardTop.jsx'
import Menu from '../../Components/Menu/Menu.jsx'

import Swal from 'sweetalert2';
import backenURL from '../../backend.js';
import axios from 'axios';

function EditarCepa() {
    const location = useLocation();
    const navigate = useNavigate();

    //obtener los datos de location
    const { ID, Nombre, Origen, Medio } = location.state;
    //mostrar en el formulario los datos de la cepa
//mostrar en el formulario los datos de la cepa
const [nombreCepa, setNombreCepa] = useState(Nombre);
const [origenCepa, setOrigenCepa] = useState(Origen);
const [medioCepa, setMedioCepa] = useState(Medio === "Dulce" || Medio === "Salada" ? Medio : "");
const [idCepa, setIdCepa] = useState(ID);
console.log(idCepa);
console.log(nombreCepa, origenCepa, medioCepa);



    const nombre = localStorage.getItem('nombre');
    const email = localStorage.getItem('email');
    const avatar = localStorage.getItem('avatar');
    const token = localStorage.getItem('token');

  
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
        // construir el formdata con los datos del formulario
        const formData = {
            nombre: nombreCepa,
            origen: origenCepa,
            medio: medioCepa
        };

        actualizarCepa(formData);
    };

    const regresar = () => {
        navigate('/MisCepas');
    };

    const actualizarCepa = async(formData) => {
        // Aquí puedes colocar la lógica para eliminar la cepa
        //soicitando al backend
        try {
            const response = await axios.put(backenURL + '/api/cepas/'+idCepa, formData);
            // Verificar el código de estado de la respuesta
            if (response.status === 200) {
                //Mostrar un swal para indicar que la cepa ha sido agregada exitosamente y despues redirigir al usuario a la vista de MisCepas
                Swal.fire({
                    icon: 'success',
                    title: '¡Éxito!',
                    text: 'La cepa ha sido actualizada exitosamente',
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
                        <h1 className="titleAddCepa">Editar Cepa</h1>
                        <p className="textAddCepa">Por favor ingresa la información</p>
                        <form className="formAddCepa" onSubmit={handleFormSubmit}>
                            <div className="containerInputAddCepa">
                                <p className='textInput'>Nombre del cultivo</p>
                                <input
                                    type="text"
                                    placeholder="Nombre de la cepa"
                                    className="inputAddCepa"
                                    value={nombreCepa}
                                    onChange={(e) => setNombreCepa(e.target.value)}
                                />

                            </div>
                            <div className="containerInputAddCepa">
                                <p className='textInput'>Especie</p>
                                <select
                                    value={origenCepa}
                                    onChange={(e) => setOrigenCepa(e.target.value)}
                                    className="inputAddCepa"
                                >
                                    <option value="">Selecciona Origen</option>
                                    <option value="Adquirida">Adquirida</option>
                                    <option value="Cultivada">Cultivada</option>
                                </select>

                            </div>
                            <div className="containerInputAddCepa">
                                <p className='textInput'>Medio</p>
                                <select
                                    value={medioCepa}
                                    onChange={(e) => setMedioCepa(e.target.value)}
                                    className="inputAddCepa"
                                >
                                    <option value="">Selecciona Medio</option>
                                    <option value="Dulce">Dulce</option>
                                    <option value="Salada">Salada</option>
                                </select>

                            </div>
                            <div className="containerBtnFormAddCepa">
                                <button className="btnFormAddCepa" id='cancelar' onClick={regresar}>Cancelar</button>
                                <button type="submit" className="btnFormAddCepa" id='aceptar'>Actualizar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </body>
    );
}

export default EditarCepa;
