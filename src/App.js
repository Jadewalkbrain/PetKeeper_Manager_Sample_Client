import React, { Component } from "react";
import Header from "./components/router/Header";
import Menu from "./components/router/Menu";
import Login from './components/router/Login';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
          <Route exact path="/" component={Login}/>
          <Route path="/welcome" component={Header}/>
          <Route path="/welcome" component={Menu}/>
      </Router>
    );
  }
}
export default App;
