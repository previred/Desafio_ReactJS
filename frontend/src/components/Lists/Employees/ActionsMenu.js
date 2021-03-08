import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';

function ActionMenu (props) {

    const adminActions = ["Editar", "Eliminar"];

    return (
        <Form>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Control as="select">
                    <option>Elija una opcion</option>
                    {adminActions.map(action => <option>{action}</option>)}
                </Form.Control>
            </Form.Group>
        </Form>
    )
}

export default ActionMenu;