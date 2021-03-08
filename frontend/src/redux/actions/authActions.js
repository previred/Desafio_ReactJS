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
                    history.replace("/");
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error());
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
