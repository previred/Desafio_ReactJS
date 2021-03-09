import { authConstants } from '../constants/authConstants';
import { alertActions } from './alertsActions';
import axios from 'axios';
import history from '../../services/history';

export const authActions = {
    login,
    logout
};

function login(data) {
    return dispatch => {
        axios.post('http://localhost:5000/api/token', data)
            .then(
                response => { 
                    dispatch(success(response.data));
                    localStorage.setItem('token', response.data.accessToken);
                    setTimeout(() => {
                        history.replace("/");
                    }, 3000)  
                },
                error => {
                    dispatch(failure(error));
                    const { status } = error.response;
                    errorHandler(dispatch, status);
                }
            );
    };

    function success(token) { return { type: authConstants.LOGIN_SUCCESS, token } }
    function failure(error) { return { type: authConstants.LOGIN_FAILURE, error } }
}

function logout() {
    localStorage.clear();
    return { type: authConstants.LOGOUT };
}

function errorHandler(dispatch, status) {
    if(status === 403)
        dispatch(alertActions.error('credenciales incorrectas'));

    if(status === 400)
        dispatch(alertActions.error('La solicitud ha fallado'));

    if(status === 500)
        dispatch(alertActions.error('Error en el servidor'));
}