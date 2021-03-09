import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { alert } from './alertReducer.js';
import { authentication } from './authReducer';
import { employeesList } from './employeeReducer';

const combinedReducers = combineReducers({
    authentication,
    alert,
    employeesList
});

export const store = createStore(
    combinedReducers,
    applyMiddleware(
        thunkMiddleware
    )
);