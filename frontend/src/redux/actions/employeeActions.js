import { employeeConstants } from '../constants/employeeConstants';
import { alertActions } from './alertsActions';
import axiosApiInstance from '../../services/interceptor';

export const employeeActions = {
    getAllEmployees,
    editEmployee,
    deleteEmployee
};

function getAllEmployees() {
    return async dispatch => {
        await axiosApiInstance.get('http://localhost:5000/api/employees')
            .then(
                response => {
                    dispatch(success(response.data));
                },
                error => {
                    const { status } = error.response;
                    dispatch(failure(error));
                    errorHandler(dispatch, status);
                }
            );

        function success(data) { return { type: employeeConstants.GETALL_SUCCESS, data } }
        function failure(error) { return { type: employeeConstants.GETALL_FAILURE, error } }
    };
}

function editEmployee(employee) {

    const data = JSON.stringify(employee);
    
    return async dispatch => {
        await axiosApiInstance.put(`http://localhost:5000/api/employees/${employee.idEmployee}`, data)
            .then(
                response => {
                    dispatch(alertActions.success());
                    setTimeout(() => {
                        window.location.reload();
                    }, 3000)  
                },
                error => {
                    const { status } = error.response;
                    errorHandler(dispatch, status);
                }
            );
    };
}

function deleteEmployee(employee) {
    return async dispatch => {
        await axiosApiInstance.delete(`http://localhost:5000/api/employees/${employee.idEmployee}`)
            .then(
                response => {
                    dispatch(alertActions.success());
                    setTimeout(() => {
                        window.location.reload();
                    }, 3000)  
                },
                error => {
                    const { status } = error.response;
                    errorHandler(dispatch, status);
                }
            );
    };
}

function errorHandler(dispatch, status) {
    if(status === 403)
        dispatch(alertActions.error('credenciales incorrectas'));

    if(status === 400)
        dispatch(alertActions.error('La solicitud ha fallado'));

    if(status === 500)
        dispatch(alertActions.error('Error en el servidor'));
}