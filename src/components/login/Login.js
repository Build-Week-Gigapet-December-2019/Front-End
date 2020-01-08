import React, { useState } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../../utilities/axiosWithAuth";
import Layout from "antd/es/layout";
import "antd/es/layout/style/css";
import Breadcrumb from "antd/es/breadcrumb";
import "antd/es/breadcrumb/style/css";
import Form from "antd/es/form";
import "antd/es/form/style/css";
import Icon from "antd/es/icon";
import "antd/es/icon/style/css";
import Input from "antd/es/input";
import "antd/es/input/style/css";
import Button from "antd/es/button";
import "antd/es/button/style/css";

const { Content } = Layout;

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/auth/login", credentials)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user_id", res.data.id);
        props.setIsAuthenticated(true);
        props.history.push(`/dashboard/${res.data.id}`);
      })
      .catch(err => console.log(err));
  };

  return (
    <Layout className="layout">
      <Content className="home-desktop-content" style={{ padding: "0 20px" }}>
        <Breadcrumb style={{ margin: "24px 0" }}></Breadcrumb>
        <div style={{ background: "#fff", padding: 24, minHeight: "90vh", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h1>Log in</h1>

          <Form style={{ width: "20%" }} onSubmit={login} className="login-form">
            <Form.Item>
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
                name="username"
                value={credentials.username}
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item>
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item>
              <Button
              style={{ width: "100%" }}
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
              Or <Link to="/signup">register now!</Link>
            </Form.Item>
          </Form>

          {/* <form onSubmit={login}>
            <h1>Username:</h1>
            <input
              type="text"
              name="username"
              value={credentials.username}
              onChange={handleChange}
            />
            <h1>Password:</h1>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
            />
            <button>Log In</button>
          </form>
          <h2>Don't have an account?</h2>
          <button onClick={() => props.history.push(`/signup`)}>Sign Up</button> */}
        </div>
      </Content>
    </Layout>
  );
};

export default Login;
