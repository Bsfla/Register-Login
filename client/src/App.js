import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/views/LoginPage/Login';
import LandingPage from './components/views/LandingPage/LandingPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/dashboard" component={RegisterPage} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
