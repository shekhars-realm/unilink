import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import landing from "./Pages/landing"


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={landing} />
      </Switch>
    </Router>
  );
}

export default App;
