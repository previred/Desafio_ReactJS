import React from 'react';
import EmployeesTable from '../Lists/Employees/Table';
import LogoutButton from '../Login/LogoutButton';
import Alert from '../Alerts';
import {authActions} from '../../redux/actions/authActions';
import { connect } from 'react-redux'

function Home(props) {

    const handleLogout = () => {
        props.logout();
    }

    return (
        <div>
            <LogoutButton />
            <h1>
                Empleados
            </h1>
            <EmployeesTable />
            <Alert />
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        logout: () => dispatch(authActions.logout()),
    }
}

export default connect(null, mapDispatchToProps)(Home);