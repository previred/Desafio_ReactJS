import { alertConstants } from '../constants/alertConstants';

export const alertActions = {
    success,
    error,
    clear
};

function success() {
    return { type: alertConstants.SUCCESS };
}

function error(message) {
    return { type: alertConstants.ERROR, message };
}

function clear() {
    return { type: alertConstants.CLEAR };
}