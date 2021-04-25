import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, navigate } from "@reach/router";
import { removeAuthInfo } from "../../redux/actions/authInfo";
import { Layout, Menu } from "antd";
import { UserOutlined, SettingOutlined } from "@ant-design/icons";

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const MenuLayout = ({ children }) => {
  const { name, surname } = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();

  const logout = () => {
    localStorage.setItem("token", "");
    dispatch(removeAuthInfo());
    navigate("/login");
  };

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
            <Link to="/employees">Employees</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{ float: "right", marginRight: "22px" }}
          >
            <SubMenu
              key="SubMenu"
              icon={<SettingOutlined />}
              title={`${name} ${surname}`}
            >
              <Menu.Item key="setting:1" onClick={logout}>
                Logout
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Header>
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
