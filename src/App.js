import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import ProductList from "./ProductList.jsx";
import logo from './logo.svg';
import './App.css';
import ProductHomepage from './components/ProductHomepage';

class App extends Component {
  render() {
    return (
      <Router history={ browserHistory }>
        <Route path={"/"} component={ ProductList } />
        <Route path={"/home"} component={ProductHomepage} />
      </Router>
    );
  }
}

export default App;
