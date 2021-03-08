import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { alert } from './alertReducer.js';
import { authentication } from './authReducer';

const combinedReducers = combineReducers({
    authentication,
    alert
});

export const store = createStore(
    combinedReducers,
    applyMiddleware(
        thunkMiddleware
    )
);