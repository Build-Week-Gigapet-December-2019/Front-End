import React from "react";

function Dashboard() {
  console.log(localStorage.getItem('token'));

  return (
    <div className="App">
      <h1>Hello!</h1>
    </div>
  );
}
export default Dashboard;
