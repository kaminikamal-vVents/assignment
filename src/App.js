import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import ProductList from "./ProductList.jsx";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router history={ browserHistory }>
        <Route path={"/"} component={ ProductList } />
      </Router>
    );
  }
}

export default App;
