import React, { Component } from "react";
import Header from "./components/Layouts/Header";
import Article from "./components/Layouts/Article";
import Menu from "./components/Layouts/Menu";
import Login from './components/Login';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
          <Route exact path="/" component={Login}/>
          <Route path="/welcome" component={Header}/>
          <Route path="/welcome" component={Menu}/>
          <Route path="/welcome" component={Article}/>
      </Router>
    );
  }
}
export default App;
