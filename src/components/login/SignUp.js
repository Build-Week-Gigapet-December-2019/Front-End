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

const SignUp = props => {
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

  const register = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/auth/register", credentials)
      .then(res => {
        props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  return (

<Layout className="layout">
      <Content className="home-desktop-content" style={{ padding: "0 20px" }}>
        <Breadcrumb style={{ margin: "24px 0" }}></Breadcrumb>
        <div style={{ background: "#fff", padding: 24, minHeight: "90vh", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h1>Sign Up!</h1>

          <Form style={{ width: "20%" }} onSubmit={register} className="signup-form">
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
                Sign Up
              </Button>
              Or <Link to="/">Already have an account?</Link>
            </Form.Item>
          </Form>
        </div>
      </Content>
    </Layout>


    // <div>
    //   <section>
    //     <h1>Sign up</h1>
    //     <form onSubmit={register}>
    //       <h1>Username:</h1>
    //       <input
    //         type="text"
    //         name="username"
    //         value={credentials.username}
    //         onChange={handleChange}
    //       />
    //       <h1>Password:</h1>
    //       <input
    //         type="password"
    //         name="password"
    //         value={credentials.password}
    //         onChange={handleChange}
    //       />
    //       <button>Sign Up</button>
    //     </form>
    //   </section>
    // </div>
  );
};

export default SignUp;
