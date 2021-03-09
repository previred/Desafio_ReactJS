import { employeeConstants } from '../constants/employeeConstants';

export function employeesList(state = {}, action) {
    switch (action.type) {
    case employeeConstants.GETALL_REQUEST:
        return {
            loading: true
        };
    case employeeConstants.GETALL_SUCCESS:
        return {
            employees: action.employees
        };
    case employeeConstants.GETALL_FAILURE:
        return { 
            error: action.error
        };
    default:
        return state
    }
}