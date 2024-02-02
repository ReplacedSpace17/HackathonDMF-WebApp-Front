
//---------------------------------------------------- REACT ----------------------------------------------------//
import datos from './tabla.json'
import './home.css'

import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

//---------------------------------------------------- ASSETS ----------------------------------------------------//

import foto from '../../assets/img.png'
import SpecieIcon from '../../assets/Components/Icons/especie.svg';
import CultivoIcon from '../../assets/Components/Icons/cultivo.svg';
import BiomasaIcon from '../../assets/Components/Icons/biomasa.svg';

//---------------------------------------------------- COMPONENTES ----------------------------------------------------//
import Header from '../../Components/Header/Header.jsx'
import CardInfoTop from '../../Components/CardsInfo/cardTop.jsx'
import Menu from '../../Components/Menu/Menu.jsx'
import Table from '../../Components/Table/Table.jsx'

import LineChartComponent from '../../Components/Graphics/Line.jsx';




function Home() {

    const navigate = useNavigate();

    const nombre = localStorage.getItem('nombre');
    const email = localStorage.getItem('email');
    const avatar = localStorage.getItem('avatar');
    const token = localStorage.getItem('token');

    useEffect(() => {

        //const token = localStorage.getItem('token');


        if (!token) {
            // Si no hay token, redirigir al usuario a la página de inicio de sesión
            navigate('/Login');
        }
        // Si no hay token, redirigir al usuario a la página de inicio de sesión


    }, [navigate]);

    return (
        <body className='bodyHome'>
            <nav className='navHome'>
                <Menu />
            </nav>
            <main className='mainHome'>
                <header className='headerHome'>

                </header>
                <article className='ContentHome'>
                    <article className='section1'>
                        <article className='sectionsCards'>
                            <article className='Card1'>

                            </article>
                            <article className='Card1'>

                            </article>
                            <article className='Card1'>

                            </article>
                        </article>
                        <article className='sectionsTable'>
                            <article className='contentTable1'>

                            </article>
                            <article className='contentTable2'>

                            </article>
                        </article>
                    </article>
                    <article className='section2'>
                        <article className='GraphicsContainer'>
                            <article className='Graphics'>

                            </article>
                            <article className='Graphics'>

                            </article>
                        </article>
                        <article className='ContainerCardParameters'>
                            <article className='CardParameter'>

                            </article>
                            <article className='CardParameter'>

                            </article>
                        </article>
                    </article>
                </article>
            </main>
        </body>
    );
}
export default Home;