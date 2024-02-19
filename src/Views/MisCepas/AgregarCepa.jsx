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

function AgregarCepa() {

    const navigate = useNavigate();
    const nombre = localStorage.getItem('nombre');
    const email = localStorage.getItem('email');
    const avatar = localStorage.getItem('avatar');
    const token = localStorage.getItem('token');

    // Definimos los estados para los valores seleccionados
    const [origen, setOrigen] = useState('');
    const [tipo, setTipo] = useState('');

    useEffect(() => {
        // Aquí puedes colocar cualquier lógica que necesites
        // Por ejemplo, verificar si el usuario tiene permisos para estar en esta vista
    }, [navigate]);

    // Función para manejar el envío del formulario
    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes enviar los datos del formulario a donde necesites
    };

    const regresar = () => {
        navigate('/MisCepas');
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
