import React, { useState } from 'react'

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: ""
  })

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
  }
  
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={ state.email } onChange={ handleChange } />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={ state.password } onChange={ handleChange } />
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default Login
