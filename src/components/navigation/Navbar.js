import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const loggedIn = useSelector(state => state.sessions.loggedIn)
  const currentUser = useSelector(state => state.sessions.currentUser)

  const logout = e => {
    e.preventDefault();

    localStorage.removeItem('jwt');
    // logoutUser();
  }

  const initials = `${currentUser.first_name[0]}${currentUser.last_name[0]}`

  if(loggedIn) {
    return (
      <div>
      <ul>
        <li>{ initials }</li>
        <li><NavLink to="/videos">Videos</NavLink></li>
        <li><NavLink to="/videos/new">New Video</NavLink></li>
        <li><NavLink to="/logout" onClick={ logout }>Logout</NavLink></li>
      </ul>
    </div>
    )
  }

  return (
    <div>
      <ul>
        <li><NavLink to="/signup">Signup</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar
