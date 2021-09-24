import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import Login from './components/sessions/Login';
import Signup from './components/sessions/Signup';
import Errors from './components/static/Errors';
import Home from './components/static/Home';
import ListVideos from './components/videos/ListVideos';
import NewVideo from './components/videos/NewVideo';
import Video from './components/videos/Video';

function App() {
  const [errors, setErrors] = useState([]);
  const [currentUser, setCurrentUser] = useState({})
  const handleErrors = (err) => {
    setErrors(err);
  }

  const clearErrors = () => {
    setErrors([]);
  }

  const logoutUser = () => {
    setCurrentUser({})
  }

  const loginUser = user => {
    setCurrentUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('jwt');

    if(token) {
      fetch('http://localhost:3001/api/v1/get-current-user', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `bearer ${token}`
        }
      })
        .then(resp => resp.json())
        .then(data => {
          loginUser(data);
        })
    }
  }, [])
  
  return (
    <Router>
      <Navbar logoutUser={logoutUser} />
      <Errors errors={ errors } />
      <div className="App">
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/signup" render={ props => <Signup {...props} loginUser={loginUser} /> } />
          <Route exact path="/login" component={ Login } />
          <Route exact path="/videos" render={ (props) => <ListVideos {...props} clearErrors={ clearErrors } /> } />
          <Route exact path="/videos/new" render={ (props) =>  <NewVideo { ...props } handleErrors={ handleErrors } />} />
          <Route exact path="/videos/:id" component={ Video } />
          <Router render={ () => <h1>Bad route</h1> } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
