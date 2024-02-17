import React, { useState } from 'react';
import './header.css';
import logo from '../../assets/logoMenu.svg'
import home from '../../assets/icons/homeIcon.svg'
import perfil from '../../assets/icons/perfilIcon.svg'
import cultivos from '../../assets/icons/cultivosIcon.svg'
import gaia from '../../assets/icons/iaIcon.svg'
import stats from '../../assets/icons/statsIcon.svg'
import salir from '../../assets/img.png'

/* import de avatars */
import avatar1 from '../../assets/Avatars/avatar1.png';
import avatar2 from '../../assets/Avatars/avatar2.png';
import avatar3 from '../../assets/Avatars/avatar3.png';
import avatar4 from '../../assets/Avatars/avatar4.png';

function Header({ titulo , foto, nombre , email, avatar}) {
    
    let fotoAvatar = ''; 

    if(avatar === 'avatar1'){
        fotoAvatar = avatar1;
    }
    if(avatar === 'avatar2'){
        fotoAvatar = avatar2;
    }
    if(avatar === 'avatar3'){
        fotoAvatar = avatar3;
    }
    if(avatar === 'avatar4'){
        fotoAvatar = avatar4;
    }
    

    return (
        <div className="containerHeader">
            <div className="contentIZQUIERDA">
                <h1 className= 'tituloHeader'>{titulo}</h1>
                <div className="contentCorreo"><p className= 'txtCorreoHeader'>{email}</p></div>
            </div>
            <div className="contentDERECHA">
                <img className= 'imgProfileHeader' src={fotoAvatar}></img>
                <p className='nombreHeader'>{nombre}</p>
            </div>
        </div>
    );
}

export default Header;
