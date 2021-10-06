import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../actions/sessions';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const loggedIn = useSelector(state => state.sessions.loggedIn)
  const currentUser = useSelector(state => state.sessions.currentUser)
  const dispatch = useDispatch();

  const logoutClick = e => {
    e.preventDefault();

    dispatch(logout())
    // localStorage.removeItem('jwt');
    // logoutUser();
  }

  
  if(loggedIn) {
    const initials = `${currentUser.first_name[0]}${currentUser.last_name[0]}`
    return (
      <div>
      <ul>
        <li>{ initials }</li>
        <li><NavLink to="/videos">Videos</NavLink></li>
        <li><NavLink to="/videos/new">New Video</NavLink></li>
        <li><NavLink to="/logout" onClick={ logoutClick }>Logout</NavLink></li>
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
