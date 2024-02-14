import './style/cardEspecie.css';


function CardInfoTop({value, titulo, icono}) {
    return (
        <div className="cardEspecie">
          <div className="cardEspecieTitulo">
            <p className='EspecieTitle'>{titulo}</p>
            <img className='Icono' src={icono} alt="icono"/>
          </div>
            <div className="contentValue">
            <h1 className='cardEspecieValue'>{value}</h1>
                </div>
        </div>
    )
}
export default CardInfoTop;