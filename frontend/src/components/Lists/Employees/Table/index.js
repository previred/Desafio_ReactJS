import React, { useEffect, useState } from 'react';
import { parseJwt } from '../../../../utils/token';
import { Table } from 'react-bootstrap';
import TableHeader from './TableHeader';
import TableFile from './TableFile';
import { connect } from 'react-redux'
import { employeeActions } from '../../../../redux/actions/employeeActions';

function EmployeesTable (props) {

    const [data, setData] = useState();
    const [isAdmin, setIsAdmin] = useState();

    useEffect(async() => {
        await props.getAllEmployees();
    }, [])

    useEffect(() => {
        setData(props.employees);
    }, [props.employees])

    useEffect(() => {
        const userData = parseJwt(localStorage.getItem('token'));
        setIsAdmin(userData.employee.isAdm);
    })

    return (
        <Table striped bordered hover variant="dark">
            {data &&
                <>
                    <TableHeader userIsAdmin={isAdmin} keys={Object.keys(data[0])} />
                    <tbody>
                        {data.map(employee => {
                            return <TableFile userIsAdmin={isAdmin} employee={employee}/>
                        })}
                    </tbody>
                </>
            }
        </Table>
    )
}

const mapStateToProps = (state) => {
    return {
        employees: state.employeesList.employees,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        getAllEmployees: () => dispatch(employeeActions.getAllEmployees()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesTable);