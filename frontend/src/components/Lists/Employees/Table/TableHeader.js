import React from 'react';

function TableHeader (props) {
    return (
        <thead>
            <tr>
                {props.keys.map(key => {
                    if (key === 'isAdm')
                        return false

                    return <td>{key}</td>
                })}
                {props.userIsAdmin &&
                    <td key="actions">Acciones</td>
                }
            </tr>
        </thead>
    )
}

export default TableHeader;