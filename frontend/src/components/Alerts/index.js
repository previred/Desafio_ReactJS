import React, { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { alertActions } from '../../redux/actions/alertsActions';

function NotificationContainer (props) {

    const [show, setShow] = useState(false);
    
    useEffect(() => {
        setShow(true);

        setTimeout(() => {
            props.clear();
        }, 3000)
    }, [props.type, props.message]);

    if (show) {
        return (
            <Alert transition="fade" variant={props.type}>
                {props.message}
            </Alert>
        );
    }

    return null;
}

const mapStateToProps = (state) => {
    return {
        type: state.alert.type,
        message: state.alert.message,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        clear: () => dispatch(alertActions.clear()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationContainer);