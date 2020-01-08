import React, {useState, useEffect} from "react";
import AddChild from './entry/AddChild';
import {axiosWithAuth} from "../utilities/axiosWithAuth";

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


console.log('props in Dash', props)

  return (
    <div className="App">
    <h1>My Kids: </h1>
    {children.map((child, index) => {
    return <div key={index}><h1>{child.name}</h1><button onClick={()=> sendToForm(child)}>Add Food Entry</button></div>
    })}
      <AddChild/>
    </div>
  );
}
export default Dashboard;
