import React, { useState } from "react";
import { Route } from "react-router-dom";
import Login from "./components/login/Login";
import SignUp from "./components/login/SignUp";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./utilities/PrivateRoute";
import "./App.css";
import Navigation from "./components/Navigation";
import EntryForm from "./components/entry/EntryForm";
import EntryList from './components/entry/EntryList';
import FooterComp from './components/FooterComp';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="App">
      <Route path="/" render={props => <Navigation {...props} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
      <Route exact path="/" render={props => <Login {...props} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
      <Route path="/signup" component={SignUp} />
      <PrivateRoute path="/dashboard/:id" component={Dashboard} />      
      <PrivateRoute path='/entryform/:childid' component={EntryForm} />
      <PrivateRoute path='/entrylist/:id' component={EntryList} />
      <footer>
          <FooterComp />
        </footer>
    </div>
  );
}
export default App;
