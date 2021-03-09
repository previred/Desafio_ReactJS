import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { employeeActions } from '../../../../redux/actions/employeeActions';

function TableFile (props) {

    const {employee, userIsAdmin} = props;
    const [data, setData] = useState(employee);
    const [disabled, setDisabled] = useState(true);

    const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    }

    const cancelUpdate = () => {
        setData(employee);
        setDisabled(true);
    }

    const handleUpdate = () => {
        props.editEmployee(data);
        setDisabled(true);
    }

    const handleDelete = () => {
        props.deleteEmployee(data);
    }
    
    return (
        <tr>
            {Object.keys(data).map(key => {
                if (key === 'idEmployee' || key === 'isAdm')
                    return <td key={key}>{data[key].toString()}</td>

                if (key === 'department')
                    return <td key={key}>{data[key]['description']}</td>
                
                return (
                    <td key={key}>
                        <input
                            style={{width: "150px"}}
                            disabled={disabled}
                            name={key} 
                            onChange={handleInputChange} 
                            value={data[key]}
                        />
                    </td>
                )
            })}
            {userIsAdmin &&
                <td key="actionsList">
                    {disabled ?
                        <>
                        <button onClick={() => setDisabled(false)}>Editar</button>
                        <button onClick={handleDelete}>Eliminar</button>
                        </>
                    :
                        <>
                        <button onClick={handleUpdate}>Guardar Cambios</button>
                        <button onClick={cancelUpdate}>Cancelar</button>
                        </>
                    }
                    
                    
                </td>
            }
        </tr>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        editEmployee: (employee) => dispatch(employeeActions.editEmployee(employee)),
        deleteEmployee: (employee) => dispatch(employeeActions.deleteEmployee(employee)),
    }
};

export default connect(null, mapDispatchToProps)(TableFile);