import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

class App extends Component {
  render() {
    return (
      <div className="">
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
