import React, { useState } from 'react';
import '../table.css';
import { useNavigate } from 'react-router-dom';
import data from '../../../Views/Home/tabla.json';
import editIcon from '../../../assets/Components/Icons/edit.svg';
import deleteIcon from '../../../assets/Components/Icons/delete.svg';

import Swal from 'sweetalert2';

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

  
    const deleteCepa = (id) => {
        //alerta de confirmacion
        Swal.fire({
            title: '¿Estás seguro de eliminar la cepa?',
            text: "No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminarla!'
        }).then((result) => {
            if (result.isConfirmed) {

                //logica para eliminar la cepa

                Swal.fire(
                    'Eliminada!',
                    'La cepa ha sido eliminada.',
                    'success'
                )
                
            }
        })
    };

    const editCepa = (ID, Nombre, Origen, medio ) => {
        navigate('/EditarCepa' , {state: {ID, Nombre, Origen, medio}}); ;

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
                                <img src={editIcon} onClick={()=> editCepa(item.ID, item.Nombre, item.Origen, item.Medio)} className='iconTable'/>
                                <img src={deleteIcon} onClick={() => deleteCepa(item.ID)} className='iconTable'/>
                                   
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
