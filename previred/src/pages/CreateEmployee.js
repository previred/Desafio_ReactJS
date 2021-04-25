import React, { useState, useEffect } from "react";
import { navigate } from "@reach/router";
import { saveEmployee } from "../services/employees";
import { getDepartments } from "../services/departments";
import { Form, Input, Button, Row, Col, Select } from "antd";
import MenuLayout from "../components/MenuLayout";

const { Option } = Select;

const CreateEmployee = () => {
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fecthData = async () => {
      const { data, status } = await getDepartments();
      setDepartments(data);
    };

    fecthData();
  }, []);

  const onFinish = async (values) => {
    const department = departments.find(
      (item) => (item.idDept = values.department)
    );

    values["department"] = department;

    const rut = values.rut.split("-");
    values["rut"] = parseInt(rut[0]);
    values["dv"] = parseInt(rut[1]);

    const { data, status } = await saveEmployee(values);

    if (status === 201) {
      navigate("/employees");
    }
  };

  return (
    <MenuLayout>
      <Form {...layout} name="basic" onFinish={onFinish}>
        <Row>
          <Col span={12}>
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Ingrese nombre",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Apellido"
              name="surname"
              rules={[
                {
                  required: true,
                  message: "Ingresa apellido",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="RUT"
              name="rut"
              rules={[
                {
                  required: true,
                  message: "Ingrese rut",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Ingrese email",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Department"
              name="department"
              rules={[
                {
                  required: true,
                  message: "Selecciona departamento",
                },
              ]}
            >
              <Select style={{ width: 120 }}>
                {departments.map((item) => (
                  <Option value={item.idDept}>{item.description}</Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              label="Is Admin"
              name="isAdmin"
              rules={[
                {
                  required: true,
                  message: "Es Administrador",
                },
              ]}
            >
              <Select style={{ width: 120 }}>
                <Option value={true}>Si</Option>
                <Option value={false}>No</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Ingrese contraseña",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </MenuLayout>
  );
};

export default CreateEmployee;
