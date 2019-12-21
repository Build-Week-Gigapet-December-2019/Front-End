import React, { useState} from 'react';
import { NavLink } from 'react-router-dom'

const Navigation = (props) => {

    const removeCred = () => {
        localStorage.removeItem('token');
    }

  return (
    <div>
      <div className="App">
        <div>
        <NavLink to="/dashboard">Dashboard</NavLink>
        </div>
        <div>
        <NavLink to="/entryform/:id">Entry Form</NavLink>
        </div>
        <div>
        <NavLink to="/entrylist/:id">Entry List</NavLink>
        </div>
        <div>
        {props.isAuthenticated && <NavLink to="/" onClick={removeCred} >Logout</NavLink>}
        </div>
      </div>
    </div>
  );
};

export default Navigation;