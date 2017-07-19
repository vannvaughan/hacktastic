import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import Social from './components/Social/Social'
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav /> 

        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/social' component={ Social } />
          <Route path='/contact' component={ Contact } />
        </Switch>
      </div>
    );
  }
}


