import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'

const Navigation = (props) => {

    const removeCred = (props) => {
        localStorage.removeItem('token');

        // props.setIsAuthenticated(true)
    }

  return (
    <div>
      <div className="App">
        <div>
        <NavLink to={`/dashboard/${localStorage.getItem("user_id")}`}>Dashboard</NavLink>
        </div>
        <div>
        <NavLink to={`/entryform/${localStorage.getItem("user_id")}`}>Entry Form</NavLink>
        </div>
        <div>
        <NavLink to={`/entrylist/${localStorage.getItem("user_id")}`}>Entry List</NavLink>
        </div>
        <div className>
          {props.isAuthenticated && <NavLink to="/" onClick={removeCred} >Logout</NavLink>}
        
        </div>
      </div>
    </div>
  );
};

export default Navigation;