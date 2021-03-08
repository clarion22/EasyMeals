import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles'
import { FormHelperText } from '@material-ui/core';
import AuthModal from './AuthModal'
import './navbar.css'


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#47a05a',
    display: 'flex',
    justifyContent: 'space-between',
    minHeight: '70px',
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
