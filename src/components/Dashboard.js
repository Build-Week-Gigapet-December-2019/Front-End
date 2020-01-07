import React from "react";
import AddChild from './entry/AddChild';

function Dashboard() {
  console.log(localStorage.getItem('token'));

  return (
    <div className="App">
      <h1>Hello!</h1>
      <AddChild/>
    </div>
  );
}
export default Dashboard;
