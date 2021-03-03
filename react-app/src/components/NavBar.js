import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { makeStyles } from '@material-ui/core/styles'
import { FormHelperText } from '@material-ui/core';
import AuthModal from './AuthModal'
import './navbar.css'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'pink',
    display: 'flex',
    justifyContent: 'space-between'
  }
}))


const NavBar = ({ setAuthenticated }) => {
  const classes = useStyles()
  return (
    <nav className={classes.root}>
      <div>
        <img />
        <NavLink to="/" exact={true} activeClassName="active" className='home_btn'>
            Home
          </NavLink>
      </div>
      <AuthModal />
    </nav>
  );
}

export default NavBar;
