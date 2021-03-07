import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from '../components/Home';
import Login from '../components/Login/LoginForm';

function Routes() {

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route path="/login" component={ Login } />
            </Switch>
        </Router>
    )
}

export default Routes;