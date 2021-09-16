import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <ul>
        <li><NavLink to="/videos">Videos</NavLink></li>
        <li><NavLink to="/videos/new">New Video</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar
