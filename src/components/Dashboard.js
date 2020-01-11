import React, {useState, useEffect} from "react";
import AddChild from './entry/AddChild';
import Layout from "antd/es/layout";
import "antd/es/layout/style/css";
import Breadcrumb from "antd/es/breadcrumb";
import "antd/es/breadcrumb/style/css";
import {axiosWithAuth} from "../utilities/axiosWithAuth";
import '../index.css';

const { Content } = Layout;

function Dashboard(props) {

  const [children, setChildren] = useState([]);

   useEffect(()=>{
        axiosWithAuth()
        .get(`/api/parents/children/${localStorage.getItem('user_id')}`)
        .then (res => {
            console.log(res)
            setChildren(res.data)
        })
        .catch(error => console.log(error, "ERROR"))
    }, [])

  const sendToForm = (child) => {
    props.history.push(`/entryform/${child.id}`)
  }


  return (
    

<Layout className="layout">
<Content className="home-desktop-content" style={{ padding: "0 20px" }}>
  <Breadcrumb style={{ margin: "24px 0" }}></Breadcrumb>
  <div style={{ background: "#fff", padding: 24, minHeight: "80vh", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} className="App">
    <h1>My Kids: </h1>
    {children.map((child, index) => {
    return <div key={index}><h2>{child.name}</h2><button className='mybtn' onClick={()=> sendToForm(child)}>Add Food Entry</button></div>
    })}
      <AddChild/>
    </div>
</Content>
</Layout>
  );
}
export default Dashboard;
