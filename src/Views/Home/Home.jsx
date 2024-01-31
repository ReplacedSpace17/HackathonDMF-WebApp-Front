
//---------------------------------------------------- REACT ----------------------------------------------------//
import datos from './tabla.json'
import './home.css'

import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';

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

    useEffect(() => {
        // Verificar si hay un token de sesión almacenado en el localStorage
        const token = localStorage.getItem('token');
        const emailAccess = localStorage.getItem('email');
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
                    <Header
                        titulo="Mis cultivos"
                        foto={foto}
                        nombre="Javier Gutierrez" 
                        email= "sjsnjwsnjnjnj"
                    />
                </header>
                <article className='ContentHome'>
                    <article className='section1'>
                        <article className='sectionsCards'>
                            <article className='Card1'>
                                <CardInfoTop
                                    value="23"
                                    titulo="Especie"
                                    icono={SpecieIcon} 
                                />
                            </article>
                            <article className='Card1'>
                                <CardInfoTop
                                    value="4"
                                    titulo="Cultivos"
                                    icono={CultivoIcon} 
                                />
                            </article>
                            <article className='Card1'>
                                <CardInfoTop
                                    value="17"
                                    titulo="Biomasa"
                                    icono={BiomasaIcon} 
                                />
                            </article>
                        </article>
                        <article className='sectionsTable'>
                            <article className='contentTable1'>
                                <Table data={datos} />
                            </article>
                            <article className='contentTable2'>
                              <LineChartComponent   />
                            </article>
                        </article>
                    </article>
                    <article className='section2'>
                        <h1>dfsf</h1>
                    </article>
                </article>
            </main>
        </body>
    );
}
export default Home;