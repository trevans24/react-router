import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

// Components
const Nav = (props) => {
  return (
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/blog/1">Blog Post #1</Link>
    </nav>
  )
};
export default Nav;
