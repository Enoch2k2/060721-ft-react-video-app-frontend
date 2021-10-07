import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from './actions/sessions';
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
  const requesting = useSelector(state => state.requesting);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   const token = localStorage.getItem('jwt');

  //   if(token) {
  //     fetch('http://localhost:3001/api/v1/get-current-user', {
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json',
  //         'Authorization': `bearer ${token}`
  //       }
  //     })
  //       .then(resp => resp.json())
  //       .then(data => {
  //         loginUser(data);
  //       })
  //   }
  // }, [])
  useEffect(() => {
    dispatch(getCurrentUser())
  }, [])


  
  return (
    <Router>
      <Navbar />
      <Errors />
      <div className="App">
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/signup" component={ Signup } />
          <Route exact path="/login" component={ Login } />
          <Route exact path="/videos" component={ ListVideos } />
          <Route exact path="/videos/new" component={ NewVideo } />
          <Route exact path="/videos/:id" component={ Video } />
          <Router render={ () => <h1>Bad route</h1> } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
