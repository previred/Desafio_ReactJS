import { employeeConstants } from '../constants/employeeConstants';
import { alertActions } from './alertsActions';
import axiosApiInstance from '../../services/interceptor';

export const employeeActions = {
    getAllEmployees
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

                    if(status === 403)
                        dispatch(alertActions.error('credenciales incorrectas'));
            
                    if(status === 400)
                        dispatch(alertActions.error('el login ha fallado'));
                
                    if(status === 500)
                        dispatch(alertActions.error('el backend no esta levantado'));
                }
            );
    };

    function success(employees) { return { type: employeeConstants.GETALL_SUCCESS, employees } }
    function failure(error) { return { type: employeeConstants.GETALL_FAILURE, error } }
}
