import React from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';

function LoginForm() {
    return (
        <Container className="d-flex justify-content-center">
            <Row>
                <Form className="p-2">
                    <Form.Group controlId="formUserRut">
                        <Form.Label>RUT</Form.Label>
                        <Form.Control type="text" placeholder="1" />
                    </Form.Group>

                    <Form.Group controlId="formUserPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button>
                        Ingresar
                    </Button>
                </Form>
            </Row>
        </Container>
    )
}

export default LoginForm;