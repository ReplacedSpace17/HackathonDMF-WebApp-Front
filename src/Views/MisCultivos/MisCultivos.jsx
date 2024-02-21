
//---------------------------------------------------- REACT ----------------------------------------------------//


import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './MisCepas.css';
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




function MisCultivos({ datos }) {

    const navigate = useNavigate();

    const nombre = localStorage.getItem('nombre');
    const email = localStorage.getItem('email');
    const avatar = localStorage.getItem('avatar');
    const token = localStorage.getItem('token');

    useEffect(() => {

        //const token = localStorage.getItem('token');

        /*
                if (!token) {
                    // Si no hay token, redirigir al usuario a la página de inicio de sesión
                    navigate('/Login');
                }
                // Si no hay token, redirigir al usuario a la página de inicio de sesión
        */

    }, [navigate]);



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
                        <TableCepasEdit data={datos} />
                    </div>
                </div>
            </main>
        </body>
    );
}
export default MisCultivos;