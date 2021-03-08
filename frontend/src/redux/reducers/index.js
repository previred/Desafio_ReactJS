import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { authentication } from './authReducer';

const combinedReducers = combineReducers({
    authentication
});

export const store = createStore(
    combinedReducers,
    applyMiddleware(
        thunkMiddleware
    )
);