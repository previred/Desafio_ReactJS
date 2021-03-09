import React from 'react';
import { authActions } from '../../redux/actions/authActions';
import { connect } from 'react-redux'

function LogoutButton(props) {

    const handleLogout = () => {
        props.logout();
    }

    return (
        <div className="float-right">
            <button onClick={handleLogout} >Logout</button>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        logout: () => dispatch(authActions.logout()),
    }
}

export default connect(null, mapDispatchToProps)(LogoutButton);