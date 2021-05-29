import { createContext, useState } from 'react';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import LogIn from './Components/LoginPage/LogIn';
import Home from './Components/HomePage/Home/Home';
import Confirm from './Components/ConfirmationPage/Confirm/Confirm';
import PrivateRoute from './Components/LoginPage/PrivateRoute/PrivateRoute';
export const UserContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <PrivateRoute path="/confirm/:foodName">
            <Confirm />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>

    </UserContext.Provider>
  );
}

export default App;
