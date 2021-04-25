import React from "react";
import { useDispatch } from "react-redux";
import { navigate } from "@reach/router";
import jwt_decode from "jwt-decode";
import { login } from "../services/login";
import { setAuthInfo } from "../redux/actions/authInfo";
import { Form, Input, Button, Row, Col } from "antd";

const Login = () => {
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

  const dispatch = useDispatch();

  const onFinish = async (values) => {
    const { data, status } = await login(values);

    if (status === 200) {
      localStorage.setItem("token", data.accessToken);

      const decoded = jwt_decode(data.accessToken);
      dispatch(setAuthInfo(decoded.employee));
      navigate("/employees");
    }
  };

  return (
    <Row align="middle">
      <Col span={6} offset={8}>
        <Form {...layout} name="basic" onFinish={onFinish}>
          <Form.Item
            label="RUT"
            name="rut"
            rules={[
              {
                required: true,
                message: "Ingresa tu rut",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Contraseña"
            name="password"
            rules={[
              {
                required: true,
                message: "Ingresa tu contraseña",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
