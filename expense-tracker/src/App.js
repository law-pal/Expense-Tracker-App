import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Category from './Components/Category';
import Home from './Components/Home';
import Expenses from './Components/Expenses'
import Navigation from './Components/Navigation';


 class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation/>
        </div>
        <Switch>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/categories' component={Category}/>
          <Route exact path='/expenses' component={Expenses}/>
        </Switch>
      </Router>
    );
  }
}


export default App;
