import React from 'react';
import {
    Router,
    Switch,
    Route
} from "react-router-dom";
import Home from '../components/Home';
import Login from '../components/Login/LoginForm';
import AuthRoute from '../services/authWrapper';
import history from '../services/history';

function Routes(props) {

    return (
        <Router history={history}>
            <Switch>
                <AuthRoute exact path="/" component={Home}>
                    <Home />
                </AuthRoute>

                <Route exact path="/login">
                    <Login />
                </Route>

            </Switch>
        </Router>
    )
}

export default Routes;