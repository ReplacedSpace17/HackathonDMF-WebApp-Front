import './infoCultivo.css';
import React from 'react';

import CultivoIcon from '../../assets/Components/Icons/cultivo.svg';

function CardBottomParametros() {
   return (
      <div className="containerParameters">
         <div className="contentTop">
            <p>Especie</p>
            <img src={CultivoIcon} className="iconCultivoCard" />
         </div>
         <div className="contentCenter">

            <div className="infoCultivo">
               <div className="containerIconText">
                  <img src={CultivoIcon} className="iconParametroCard" />
                  <div className="containerText">
                     <p className='titleCardEspecie'>Titulo</p>
                     <p className='valueCardEspecie'>subtitulo</p>
                  </div>
               </div>
               <div className="containerIconText">
                  <img src={CultivoIcon} className="iconParametroCard" />
                  <div className="containerText">
                     <p className='titleCardEspecie'>Titulo</p>
                     <p className='valueCardEspecie'>subtitulo</p>
                  </div>
               </div>
               <div className="containerIconText">
                  <img src={CultivoIcon} className="iconParametroCard" />
                  <div className="containerText">
                     <p className='titleCardEspecie'>Titulo</p>
                     <p className='valueCardEspecie'>subtitulo</p>
                  </div>
               </div>


            </div>
         </div>
         <div className="contentBottom">
            <button>Obtener biomasa</button>
         </div>
      </div>
   )
}

export default CardBottomParametros;
