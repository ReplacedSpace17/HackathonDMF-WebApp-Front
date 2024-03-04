
//---------------------------------------------------- REACT ----------------------------------------------------//


import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './MisCepas.css';
import backenURL from '../../backend.js';
import axios from 'axios';
//---------------------------------------------------- ASSETS ----------------------------------------------------//

import foto from '../../assets/img.png'
import SpecieIcon from '../../assets/Components/Icons/especie.svg';
import CultivoIcon from '../../assets/Components/Icons/cultivo.svg';
import BiomasaIcon from '../../assets/Components/Icons/biomasa.svg';

//---------------------------------------------------- COMPONENTES ----------------------------------------------------//
import Header from '../../Components/Header/Header.jsx'
import CardInfoTop from '../../Components/CardsInfo/cardTop.jsx'
import Menu from '../../Components/Menu/Menu.jsx'

import TableCepasEdit from '../../Components/Table/TablaEdits/TableCepasEdit.jsx'




function MisCepas({ datos }) {

    const navigate = useNavigate();
    const [cepas, setCepas] = useState([]);

    const nombre = localStorage.getItem('nombre');
    const email = localStorage.getItem('email');
    const avatar = localStorage.getItem('avatar');
    const token = localStorage.getItem('token');
    const uid = localStorage.getItem('uid');

    useEffect(() => {

        //const token = localStorage.getItem('token');

        
                if (!token) {
                    // Si no hay token, redirigir al usuario a la página de inicio de sesión
                    navigate('/Login');
                }
                // Si no hay token, redirigir al usuario a la página de inicio de sesión
        //GET CEPAS all
        
        obtenerCepas(uid);

    }, [navigate]);

    //obtener del backend las cepas del usuario
    const obtenerCepas = async (id_user) => {
        try {
            const response = await axios.get(backenURL + '/api/cepas/user/'+id_user);
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
                    <Header titulo="Mis cepas" nombre={nombre} email={email} avatar={avatar} />
                </header>
                <div className="containerMisCepas">
                    <div className="containerTableMisCepas">
                        <TableCepasEdit data={cepas} />
                    </div>
                </div>
            </main>
        </body>
    );
}
export default MisCepas;