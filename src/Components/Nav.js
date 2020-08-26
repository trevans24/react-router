import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

// Components
const Nav = (props) => {
  return (
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/loading-management/affiliate/:companyCustomerIdName/location">Loading</Link>
    </nav>
  )
};
export default Nav;
