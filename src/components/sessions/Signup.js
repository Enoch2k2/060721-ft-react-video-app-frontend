import React, { useState } from 'react'
import { useHistory } from 'react-router'
const Signup = ({loginUser}) => {
  const [state, setState] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: ""
  })

  const history = useHistory();

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault();

    const resp = await fetch('http://localhost:3001/api/v1/signup', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(state)
    })

    const data = await resp.json();

    localStorage.setItem('jwt', data.jwt);
    loginUser(data.user);
    history.push('/')
  }

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={ state.email } onChange={ handleChange } />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={ state.password } onChange={ handleChange } />
        </div>
        <div>
          <label htmlFor="first_name">First Name</label>
          <input type="text" id="first_name" name="first_name" value={ state.first_name } onChange={ handleChange } />
        </div>
        <div>
          <label htmlFor="last_name">Last Name</label>
          <input type="text" id="last_name" name="last_name" value={ state.last_name } onChange={ handleChange } />
        </div>
        <input type="submit" value="Create Account" />
      </form>
    </div>
  )
}

export default Signup
