import { alertConstants } from '../constants/alertConstants';

export const alertActions = {
    success,
    error
};

function success() {
    return { type: alertConstants.SUCCESS };
}

function error(message) {
    return { type: alertConstants.ERROR, message };
}