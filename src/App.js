import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './SharedComponents/Header.js';
import Home from './Components/Home.js';
import Signup from './Components/Signup.js';
import Login from './Components/Login.js';
import About from './Components/About.js';
import Profile from './Components/Profile.js';


import './App.css';

class App extends Component {
  render() {
    return <BrowserRouter>
    <div>
      <Header />

      <div className="container test">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/about" component={About} />
        <Route exact path="/profile" component={Profile} />


      </Switch>
    </div>
    </div>
    </BrowserRouter>;
    
  }
}

export default App;
