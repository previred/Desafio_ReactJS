import React, { useState, useEffect } from "react";
import { Table } from "antd";
import { getEmployees } from "../services/employees";
import MenuLayout from "../components/MenuLayout";

const Employees = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Surname",
      dataIndex: "surname",
      key: "surname",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Rut",
      dataIndex: "rut",
      key: "rut",
      render: (text, record) => `${record.rut}-${record.dv}`,
    },
    {
      title: "Department",
      dataIndex: "deparment",
      key: "deparment",
      render: (text, record) => record.department.description,
    },
  ];

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fecthData = async () => {
      const { data, status } = await getEmployees();
      setEmployees(data);
    };

    fecthData();
  }, []);

  return (
    <MenuLayout>
      <Table columns={columns} dataSource={employees} />
    </MenuLayout>
  );
};

export default Employees;
