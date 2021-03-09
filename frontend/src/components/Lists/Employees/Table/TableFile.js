import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { employeeActions } from '../../../../redux/actions/employeeActions';
import { validate, clean, format, getCheckDigit } from '../../../../utils/rutValidator';

function TableFile (props) {

    const {employee, userIsAdmin} = props;
    const [data, setData] = useState(employee);
    const [disabled, setDisabled] = useState(true);
    const [rutVal, setRutVal] = useState();

    const handleInputChange = (event) => {

        if([event.target.name] == 'rut') {
            rutValidations([event.target.name]);
        }

        if([event.target.name] == 'dv') {
            dvValidations([event.target.name]);
        }

        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    }

    const rutValidations = (rut) => {
        console.log('RUT EDIT')
        let dv = data.dv;
        rut = clean(rut.concat(dv));

        if (!validate(rut)) {
            setRutVal('El rut no es valido!');
        }

        setRutVal(null);
    }

    const dvValidations = (dv) => {
        const rut = data.rut;
        const validDv = getCheckDigit(rut);

        if (validDv !== dv) {
            setRutVal('El digito verificaro no es valido!');
        }

        setRutVal(null);
    }

    const cancelUpdate = () => {
        setData(employee);
        setDisabled(true);
        setRutVal(null);
    }

    const handleUpdate = () => {
        if(!rutVal){
            props.editEmployee(data);
            setDisabled(true);
        }

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
                        {key == 'rut' &&  <p>{rutVal}</p>}
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