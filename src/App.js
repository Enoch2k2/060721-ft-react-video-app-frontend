import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Errors from './components/static/Errors';
import Home from './components/static/Home';
import ListVideos from './components/videos/ListVideos';
import NewVideo from './components/videos/NewVideo';

function App() {
  const [errors, setErrors] = useState([]);
  const handleErrors = (err) => {
    setErrors(err);
  }

  const clearErrors = () => {
    setErrors([]);
  }
  
  return (
    <Router>
      <Errors errors={ errors } />
      <div className="App">
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/videos" render={ (props) => <ListVideos {...props} clearErrors={ clearErrors } /> } />
          <Route exact path="/videos/new" render={ (props) =>  <NewVideo { ...props } handleErrors={ handleErrors } />} />
          <Router render={ () => <h1>Bad route</h1> } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
