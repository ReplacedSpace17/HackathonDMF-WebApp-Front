
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
import DonutChartComponent from '../../Components/Graphics/Pastel.jsx';

import CardBottomCultivo from '../../Components/CardCultivos/CardBottomCultivo.jsx'
import CardBottomParametros from '../../Components/CardCultivos/CardBottomParametros.jsx';

function Home() {

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
                    <Header nombre={nombre} email={email} avatar={avatar} />
                </header>
                <div className="containerHome">
                    <div className="sectionLeft">
                        <div className="containerCards">
                            <div className="card">
                                <CardInfoTop
                                    value="5"
                                    titulo="Especies"
                                    icono={SpecieIcon}
                                />
                            </div>
                            <div className="card">

                            </div>
                            <div className="card">

                            </div>

                        </div>
                        <div className="Table">
                            <Table data={datos} />
                        </div>
                        <div className="Table">
                            <Table data={datos} />
                        </div>
                        <div className="separator">

                        </div>


                    </div>
                    <div className="sectionRight">
                        <div className="Graphic">
                            <DonutChartComponent />
                        </div>
                        <div className="Graphic">
                            <LineChartComponent />
                        </div>
                        <div className="ContainerParameters">
                            <div className="CardParameters">
                            <CardBottomCultivo/>

                            </div>
                            <div className="CardParameters">
                            <CardBottomParametros/>
                            </div>
                        </div>
                        <div className="separator">

                        </div>


                    </div>
                </div>
            </main>
        </body>
    );
}
export default Home;