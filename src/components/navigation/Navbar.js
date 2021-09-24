import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = ({logoutUser}) => {
  const logout = e => {
    e.preventDefault();

    localStorage.removeItem('jwt');
    logoutUser();
  }

  return (
    <div>
      <ul>
        <li><NavLink to="/videos">Videos</NavLink></li>
        <li><NavLink to="/videos/new">New Video</NavLink></li>
        <li><NavLink to="/signup">Signup</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/logout" onClick={ logout }>Logout</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar
