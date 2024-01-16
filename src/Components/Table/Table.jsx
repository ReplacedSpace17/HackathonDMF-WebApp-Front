import React from 'react';
import './table.css';

function Table({ data }) {
    return (
        <div className="containerTable">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Origen</th>
                        <th>Medio</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.ID}>
                            <td>{item.ID}</td>
                            <td>{item.Nombre}</td>
                            <td>{item.Origen}</td>
                            <td>{item.Medio}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
