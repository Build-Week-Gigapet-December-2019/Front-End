import React from "react";
import { Route } from "react-router-dom";
import Login from "./components/login/Login";
import SignUp from "./components/login/SignUp";
import Dashboard from "./components/Dashboard";
// import PrivateRoute from "./utilities/PrivateRoute";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Dashboard} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={Login} />
    </div>
  );
}
export default App;
