import React from 'react';
import ActionMenu from '../ActionsMenu';

function TableFile (props) {

    const {employee, userIsAdmin} = props;

    return (
        <tr>
            {Object.keys(employee).map(key => {
                if (key === 'isAdm')
                    return false
                if (key === 'department')
                    return <td key={key}>{employee[key]['description']}</td>
                
                return <td key={key}>{employee[key]}</td>
            })}
            {userIsAdmin &&
                <td key="actionsList">
                    <ActionMenu employeeId={employee.idEmployee} />
                </td>
            }
        </tr>
    )
}

export default TableFile;