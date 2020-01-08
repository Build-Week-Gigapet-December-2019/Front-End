import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import Layout from "antd/es/layout";
// import "antd/es/layout/style/css";
// import Menu from "antd/es/menu";
// import "antd/es/menu/style/css";
// import Button from "antd/es/button";
// import "antd/es/button/style/css";

// const { Header } = Layout;


const Navigation = (props) => {


    const removeCred = () => {
        localStorage.removeItem('token');
        props.setIsAuthenticated(false);
        props.history.push(`/`);
    }

  return (
    <div>
      <div className="nav">
        <div>
        <NavLink to={`/dashboard/${localStorage.getItem("user_id")}`}>Dashboard</NavLink>
        </div>
        <div>
        {/* <NavLink to={`/entryform/${localStorage.getItem("user_id")}`}>Entry Form</NavLink> */}
        </div>
        <div>
        <NavLink to={`/entrylist/${localStorage.getItem("user_id")}`}>Entry List</NavLink>
        </div>
        <div>
        {props.isAuthenticated && <button type="submit" onClick={()=>removeCred()} >Logout</button>}
        
        </div>
      </div>
    </div>
    // <>
    // {props.isAuthenticated && <Layout className="layout">
    //   <Header>
    //     <div className="logo" />
    //     <Menu
    //       theme="dark"
    //       mode="vertical"
    //       defaultSelectedKeys={["1"]}
    //       style={{ lineHeight: "64px" }}
    //     >
    //       <Menu.Item key="1">
    //         <Link to={`/dashboard/${localStorage.getItem("user_id")}`}>Dashboard</Link>
    //       </Menu.Item>
    //       <Menu.Item key="2">
    //         <Link to={`/entrylist/${localStorage.getItem("user_id")}`}>Entry List</Link>
    //       </Menu.Item>
    //       <Button htmlType="submit" onClick={()=>removeCred()}>Logout</Button>
    //     </Menu>
    //   </Header>
    // </Layout>}
    // </>
  );
};

export default Navigation;