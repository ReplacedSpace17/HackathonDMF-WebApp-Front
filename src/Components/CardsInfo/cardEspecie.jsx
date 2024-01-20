import './style/cardEspecie.css';

import icono from '../../assets/Components/Icons/especie.svg';

function CardEspecie({value=1}) {
    return (
        <div className="cardEspecie">
          <div className="cardEspecieTitulo">
            <p className='EspecieTitle'>Especies</p>
            <img className='Icono' src={icono} alt="icono"/>
          </div>
            <div className="contentValue">
            <h1 className='cardEspecieValue'>{value}</h1>
                </div>
        </div>
    )
}
export default CardEspecie;