import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from "./components/CreateTodo";
import EditTodo from "./components/EditTodo";
import TodosList from "./components/TodosList";
import Login from "./components/Login";

import logos from "./logos.png";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand"  >
              <img src={logos} width="150" height="80" />
            </a>
            <Link to="/edit" className="navbar-brand"><b>ADMIN</b></Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Users</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Account</Link>
                </li>
                <li>
                  <div className="form-group">
                        <Link to="/login">
                        <input type="submit" value="Logout" className="btn btn-primary"></input>
                        </Link>
                    </div>
                </li>
              </ul>
            </div>
          </nav>
          <Route path = "login" component={Login} />
          <Route path="/" exact component={TodosList} />
          <Route path="/edit" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>
      </Router>
    );
  }
}

export default App;
