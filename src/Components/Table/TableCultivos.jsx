import React, { useState } from 'react';
import './Tablecultivos.css';

function TableCultivos({ data }) {
    const [searchTerm, setSearchTerm] = useState('');

    // Filtrar los datos por el nombre
    const filteredData = data.filter(item =>
        item.Nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="containerCardTable">
            <div className="elementsTopContainer">
                <h1 className='TitleTable'>Mis cultivos</h1>
                <input
                    type="text"
                    placeholder="Buscar por nombre"
                    className="inputSearch"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="containerTable">
                <table className='tableT2'>
                    <thead className='theadT2'>
                        <tr className='trT2'>
                            <th className='thdT2'>ID</th>
                            <th className='thdT2'>Nombre de cultivo</th>
                            <th className='thdT2'>Especie</th>
                            <th className='thdT2'>Motivo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item) => (
                            <tr className='trT2' key={item.ID}>
                                <td className='tdT2'>{item.ID}</td>
                                <td className='tdT2'>{item.Nombre}</td>
                                <td className='tdT2'>{item.Especie}</td>
                                <td className='tdT2'>{item.Motivo}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TableCultivos;
