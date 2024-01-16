import React from 'react';
import './table.css';

function Table({ data }) {
    return (
        <div className="containerCardTable">
            <div className="elementsTopContainer">
                <h1 className='TitleTable'>Mis cepas</h1>
                <input type="text" placeholder="Buscar" className="inputSearch"/>
            </div>
            <div className="containerTable">
            <table className='tableT1'>
                <thead className='theadT1'>
                    <tr className='trT1'>
                        <th className='thT1'>ID</th>
                        <th className='thT1'>Nombre</th>
                        <th className='thT1'>Origen</th>
                        <th className='thT1'>Medio</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr className='trT1' key={item.ID}>
                            <td className='tdT1'>{item.ID}</td>
                            <td className='tdT1'>{item.Nombre}</td>
                            <td className='tdT1'>{item.Origen}</td>
                            <td className='tdT1'>{item.Medio}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    );
}

export default Table;
