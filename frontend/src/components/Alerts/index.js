import React, { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import { connect } from 'react-redux';

function NotificationContainer (props) {

    const [show, setShow] = useState(false);
    
    useEffect(() => {
        setShow(true);

        setTimeout(() => {
            setShow(false);
        }, 3000)
    }, [props.type, props.message]);

    if (show) {
        return (
            <Alert transition="fade" variant={props.type}>
                <Alert.Heading>{props.message}</Alert.Heading>
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

export default connect(mapStateToProps, null)(NotificationContainer);