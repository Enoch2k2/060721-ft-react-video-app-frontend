export const signup = (details, history) => {
  //*** no fetch ***//
  // return {
  //   type: "SIGNUP",
  //   payload: details
  // }

  //*** fetch ***//
  return async (dispatch) => {
    dispatch({ type: "REQUESTING" });

    const resp = await fetch('http://localhost:3001/api/v1/signup', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(details)
    })

    const data = await resp.json();

    localStorage.setItem('jwt', data.jwt);
    dispatch({ type: "LOGIN", payload: data })
    dispatch({ type: "DONE_REQUESTING" });

    history.push("/")
  }

}

export const login = (details, history) => {
  return async dispatch => {
    dispatch({ type: "REQUESTING" });
    const resp = await fetch('http://localhost:3001/api/v1/login', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(details)
    })

    const data = await resp.json();
    if(data.errors) {
      dispatch({ type: "ERRORS", payload: data.errors })
    } else {
      localStorage.setItem('jwt', data.jwt);
      dispatch({ type: "CLEAR_ERRORS" })
      dispatch({ type: "LOGIN", payload: data });
    }
    dispatch({ type: "DONE_REQUESTING" });
    history.push('/')
  }
}

export const getCurrentUser = () => {
  return async dispatch => {
    dispatch({ type: "REQUESTING"})
    const resp = await fetch("http://localhost:3001/api/v1/get-current-user", { 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `bearer ${localStorage.getItem('jwt')}`
      }
    })
    const data = await resp.json();
    const payload = {
      user: data.user,
      jwt: localStorage.getItem('jwt')
    }

    if(data.user) {
      dispatch({ type: "LOGIN", payload })
    }
    dispatch({ type: "DONE_REQUESTING" })
  }
}

export const logout = () => {
  localStorage.removeItem('jwt');

  return {
    type: "LOGOUT"
  }
}