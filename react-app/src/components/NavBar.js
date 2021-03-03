import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { makeStyles } from '@material-ui/core/styles'
import { FormHelperText } from '@material-ui/core';
import './navbar.css'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'pink',
  }
}))


const NavBar = ({ setAuthenticated }) => {
  const classes = useStyles()
  return (
    <nav className={classes.root}>
      <ul className="navbar_ul">
        <li className="navbar_home">
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </li>
        <li className="navbar_right">
          <NavLink to="/login" exact={true} activeClassName="active">
            Login
          </NavLink>
        </li>
        <li className="navbar_right">
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            Sign Up
          </NavLink>
        </li>
        <li className="navbar_right">
          <NavLink to="/users" exact={true} activeClassName="active">
            Users
          </NavLink>
        </li>
        <li className="navbar_right">
          <LogoutButton setAuthenticated={setAuthenticated} />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
