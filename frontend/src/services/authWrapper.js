import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router";

function AuthRoute(props) {
  const { loggedIn } = props;

    if (!loggedIn)
        return <Redirect to="/login" />
        
    return <Route {...props} />;

    
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        loggedIn: state.authentication.loggedIn,
    };
};


export default connect(mapStateToProps, null)(AuthRoute);