import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import Home from './components/Home'
import CssBaseline, { cssBaseline } from '@material-ui/core/CssBaseline'
import CreatePlate from './components/CreatePlate'
import DashBoard from './components/DashBoard'
import MyPlates from './components/MyPlates';
import {authenticate} from './store/session';
import {useDispatch} from 'react-redux'
import Calendar from './components/Calendar';

function App() {
  const dispatch = useDispatch();
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);


  useEffect(() => {
    (async() => {
      const user = await dispatch(authenticate());
      if (!user.errors) {
        setAuthenticated(true);
      }
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
    <CssBaseline />
      <NavBar />
      <Switch>
        <Route path="/createplate" exact={true}>
          <CreatePlate />
        </Route>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <ProtectedRoute path="/profile/dashboard" exact={true} authenticated={authenticated}>
          <DashBoard />
        </ProtectedRoute>
        <ProtectedRoute path="/profile/plates" exact={true} authenticated={authenticated}>
          <MyPlates />
        </ProtectedRoute>
        <Route path="/profile/calendar" exact={true}>
          <Calendar />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
