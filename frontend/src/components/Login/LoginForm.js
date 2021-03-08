import React, { useLayoutEffect, useState } from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';
import Alert from '../Alerts';
import { authActions } from '../../redux/actions/authActions';
import { connect } from 'react-redux'
import history from '../../services/history';

function LoginForm(props) {

    const { loggedIn, login } = props;
    const [data, setData] = useState({
        rut: '',
        password: ''
    })

    useLayoutEffect(() => {
        if(loggedIn)
            history.push('/');
    }, [])

    const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    }

    async function handleSubmit(event) {
        event.preventDefault();
        login(data);
    }

    return (
        <Container className="d-flex justify-content-center">
            <Row>
                <Form className="p-2">
                    <Form.Group controlId="formUserRut">
                        <Form.Label>RUT</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="1" 
                            name="rut"
                            value={data.rut}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formUserPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Password" 
                            name="password"
                            value={data.password}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Button onClick={handleSubmit}>
                        Ingresar
                    </Button>
                </Form>
                <Alert />
            </Row>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.authentication.loggedIn,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        login: (data) => dispatch(authActions.login(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);