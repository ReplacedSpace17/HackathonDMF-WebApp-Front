import './infoCultivo.css';
import React from 'react';

import CultivoIcon from '../../assets/Components/Icons/especie.svg';

function CardBottomCultivo({especie, origen, medio}) {
  return (
    <div className="containerParameters">
     <div className="contentTop">
        <p className='TitleCardPequeña'>Especie</p>
        <img src={CultivoIcon} className="iconCultivoCard" />
     </div>
     <div className="contentCenter">
        <div className="line"></div>
        <div className="infoCultivo">
         <div className="containerText">
            <p className='titleCardEspecie'>Especie</p>
            <p className='valueCardEspecie'>{especie}</p>
         </div>
         <div className="containerText">
            <p className='titleCardEspecie'>Origen</p>
            <p className='valueCardEspecie'>{origen}</p>
         </div>
         <div className="containerText">
            <p className='titleCardEspecie'>Medio</p>
            <p className='valueCardEspecie'>{medio}</p>
         </div>
        </div>
     </div>
     <div className="contentBottom">
        <button className='btnCardBottom'>Obtener biomasa</button>
     </div>
    </div>
  )
}

export default CardBottomCultivo;
