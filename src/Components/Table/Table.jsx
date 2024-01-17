import React, { useState } from 'react';
import './table.css';

function Table({ data }) {
    const [searchTerm, setSearchTerm] = useState('');

    // Filtrar los datos por el nombre
    const filteredData = data.filter(item =>
        item.Nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="containerCardTable">
            <div className="elementsTopContainer">
                <h1 className='TitleTable'>Mis cepas</h1>
                <input
                    type="text"
                    placeholder="Buscar por nombre"
                    className="inputSearch"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="containerTable">
                <table className='tableT1'>
                    <thead className='theadT1'>
                        <tr className='trT1'>
                            <th className='thdT1'>ID</th>
                            <th className='thdT1'>Nombre</th>
                            <th className='thdT1'>Origen</th>
                            <th className='thdT1'>Medio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item) => (
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
