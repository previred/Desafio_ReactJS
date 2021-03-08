import React, { useEffect, useState } from 'react';
import axiosApiInstance from '../../../../services/interceptor';
import { parseJwt } from '../../../../utils/token';
import { Table } from 'react-bootstrap';
import TableHeader from './TableHeader';
import TableFile from './TableFile';

function EmployeesTable () {

    const [data, setData] = useState();
    const [objkeys, setObjkeys] = useState();
    const [isAdmin, setIsAdmin] = useState();

    useEffect(() => {
        const userData = parseJwt(localStorage.getItem('token'));
        setIsAdmin(userData.employee.isAdm);
    })

    useEffect(async () => {
        const results = await axiosApiInstance.get('http://localhost:5000/api/employees');
        setData(results.data);
        setObjkeys(Object.keys(results.data[0]));
    }, [])

    return (
        <Table striped bordered hover variant="dark">
            {objkeys && <TableHeader userIsAdmin={isAdmin} keys={objkeys} />}
            <tbody>
                {data && data.map(employee => {
                    return <TableFile userIsAdmin={isAdmin} employee={employee}/>
                })}
            </tbody>
        </Table>
    )
}

export default EmployeesTable;