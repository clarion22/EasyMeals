import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles'
import { FormHelperText } from '@material-ui/core';
import AuthModal from './AuthModal'
import Logo from './Logo/EasyMealsLogo2.png'
import './navbar.css'


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#a4ffb6',
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
        <NavLink to="/" exact={true} activeClassName="active" className='home_btn'>
            <img src={Logo} style={{paddingLeft: '20px'}} />
          </NavLink>
      </div>
      <AuthModal />
    </nav>
  );
}

export default NavBar;
