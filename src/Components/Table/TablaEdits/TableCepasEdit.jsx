import React, { useState } from 'react';
import '../table.css';
import { useNavigate } from 'react-router-dom';
import data from '../../../Views/Home/tabla.json';
import editIcon from '../../../assets/Components/Icons/edit.svg';
import deleteIcon from '../../../assets/Components/Icons/delete.svg';


function TableCepasEdit() {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    // Filtrar los datos por el nombre
    const filteredData = data.filter(item =>
        item.Nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const regresar = () => {
        navigate('/Home');
    };
    const agregarCepa = () => {
        navigate('/AgregarCepa');
    };

    return (
        <div className="containerCardTable">
            <div className="elementsTopContainer">
                <h1 className='TitleTable' onClick={regresar}>Mis cepas</h1>
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
                            <th className='thdT1'>Actions</th> {/* Nueva columna para acciones */}
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item) => (
                            <tr className='trT1' key={item.ID}>
                                <td className='tdT1'>{item.ID}</td>
                                <td className='tdT1'>{item.Nombre}</td>
                                <td className='tdT1'>{item.Origen}</td>
                                <td className='tdT1'>{item.Medio}</td>
                                <td className='tdT1'> {/* Columna para acciones */}
                                <img src={editIcon} onClick={"#"} className='iconTable'/>
                                <img src={deleteIcon} onClick={"#"} className='iconTable'/>
                                   
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="buttonsBottom">
                <button className="buttonTable" onClick={regresar}>Regresar</button>
                <button className="buttonTable" onClick={agregarCepa}>Agregar nueva</button>
            </div>
        </div>
    );
}

export default TableCepasEdit;
