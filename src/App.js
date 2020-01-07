import React, { useState } from "react";
import { Route } from "react-router-dom";
import Login from "./components/login/Login";
import SignUp from "./components/login/SignUp";
import Dashboard from "./components/Dashboard";
// import PrivateRoute from "./utilities/PrivateRoute";
import "./App.css";
import Navigation from "./components/Navigation";
import EntryForm from "./components/entry/EntryForm";
import EntryList from './components/entry/EntryList';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="App">
      <Navigation isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <Route path="/" render={props => <Login {...props} setIsAuthenticated={setIsAuthenticated} />} />
      <Route path="/signup" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} />      
      <Route path='/entryform' component={EntryForm} />
      <Route path='/entrylist' component={EntryList} />
    </div>
  );
}
export default App;
