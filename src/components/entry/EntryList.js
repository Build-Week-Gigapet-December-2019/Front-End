import React, {useState, useEffect} from "react";
import Layout from "antd/es/layout";
import "antd/es/layout/style/css";
import Breadcrumb from "antd/es/breadcrumb";
import "antd/es/breadcrumb/style/css";
import {axiosWithAuth} from "../../utilities/axiosWithAuth";

const { Content } = Layout;

function EntryList(props) {

  const [foodEntries, setFoodEntries] = useState([]);

   useEffect(()=>{
        axiosWithAuth()
        .get(`/api/parents/food/parent/${localStorage.getItem('user_id')}`)
        .then (res => {
            console.log('entry list res', res)
            setFoodEntries(res.data)
        })
        .catch(error => console.log(error, "ERROR"))
    }, [])



  return (
    

<Layout className="layout">
<Content className="home-desktop-content" style={{ padding: "0 20px" }}>
  <Breadcrumb style={{ margin: "24px 0" }}></Breadcrumb>
  <div style={{ background: "#fff", padding: 24, minHeight: "80vh", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} className="App">
    <h1>My Kids' Food Entries: </h1>
    {/* {children.map((child, index) => {
    return <div key={index}><h1>{child.name}</h1><button onClick={()=> sendToForm(child)}>Add Food Entry</button></div>
    })} */}
    </div>
</Content>
</Layout>
  );
}
export default EntryList;
