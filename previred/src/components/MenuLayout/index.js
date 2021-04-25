import React from "react";
import { Layout, Menu } from "antd";
import { UserOutlined, BookOutlined } from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

const MenuLayout = ({ children }) => {
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={false}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{ marginTop: "60px" }}
        >
          <Menu.Item key="1" icon={<UserOutlined />}>
            Employees
          </Menu.Item>
          <Menu.Item key="2" icon={<BookOutlined />}>
            Deparments
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ padding: 0 }}
        ></Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MenuLayout;
