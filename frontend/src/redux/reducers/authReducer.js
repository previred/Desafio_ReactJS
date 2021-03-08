import { authConstants } from '../constants/authConstants';

const token = localStorage.getItem('token');

const initialState = {
    token:  token || '',
    loggedIn: token ? true : false
}

export function authentication(state = initialState, action) {
    switch (action.type) {
    case authConstants.LOGIN_SUCCESS:
        return {
            loggedIn: true,
            token: action.accessToken
        };
    case authConstants.LOGIN_FAILURE:
        return {};
    case authConstants.LOGOUT:
        return {
            token: '',
            loggedIn: false
        };
    default:
        return state
    }
}