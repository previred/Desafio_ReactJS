import React, { useState, useEffect } from "react";
import { navigate, Link } from "@reach/router";
import { getEmployee, updateEmployee } from "../services/employees";
import { getDepartments } from "../services/departments";
import { Form, Input, Button, Row, Col, Select } from "antd";
import MenuLayout from "../components/MenuLayout";

const { Option } = Select;

const EditEmployee = ({employeeId}) => {
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

  const [form] = Form.useForm();
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    if(localStorage.getItem("token") === "" || localStorage.getItem("token") === null ){
      navigate("/login")
    }
  }, []);

  useEffect(() => {
    const fecthDepartments = async () => {
      const { data, status } = await getDepartments();
      if (status === 200) {
        setDepartments(data);
      }
    };

    const fecthEmployee = async () => {
      const { data, status } = await getEmployee(employeeId);
      if (status === 200) {
        const response = {
          name: data.name,
          surname: data.surname,
          email: data.email,
          isAdm: data.isAdm,
          rut: `${data.rut}-${data.dv}`,
          department: data.department.idDept
        }

        console.log(response)

        form.setFieldsValue(response);
      }
    };

    fecthDepartments()
    fecthEmployee()
  }, []);

  const onFinish = async (values) => {
    const department = departments.find(
      (item) => (item.idDept = values.department)
    );

    values["department"] = department;

    const rut = values.rut.split("-");
    values["rut"] = parseInt(rut[0]);
    values["dv"] = parseInt(rut[1]);

    const { data, status } = await updateEmployee(employeeId, values);

    if (status === 202) {
      navigate("/employees");
    }
  };

  const Fn = {
    validaRut: function (rutCompleto) {
      if (!/^[0-9]+-[0-9kK]{1}$/.test(rutCompleto)) return false;
      const tmp = rutCompleto.split("-");
      let digv = tmp[1];
      const rut = tmp[0];
      if (digv == "K") digv = "k";
      return Fn.dv(rut) == digv;
    },
    dv: function (T) {
      let M = 0,
        S = 1;
      for (; T; T = Math.floor(T / 10))
        S = (S + (T % 10) * (9 - (M++ % 6))) % 11;
      return S ? S - 1 : "k";
    },
  };

  return (
    <MenuLayout>
      <Form {...layout} name="edit" form={form} onFinish={onFinish}>
        <Row>
          <Col span={12}>
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Input your name",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Surname"
              name="surname"
              rules={[
                {
                  required: true,
                  message: "Input your surname",
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
                  validator: (rule, value, cb) => {
                    Fn.validaRut(value) ? cb() : cb("Input valid RUT");
                  },
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
                  validator: (rule, value, cb) => {
                    /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                      value
                    )
                      ? cb()
                      : cb("Input valid email");
                  },
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
                  message: "Select department",
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
              name="isAdm"
              rules={[
                {
                  required: true,
                  message: "Is Admin",
                },
              ]}
            >
              <Select style={{ width: 120 }}>
                <Option value={true}>Yes</Option>
                <Option value={false}>No</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Input your password",
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
              <Link to={"/employees"} style={{marginLeft: "20px"}}> Back </Link>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </MenuLayout>
  );
};

export default EditEmployee;
