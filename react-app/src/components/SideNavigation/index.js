import React from 'react'
import {NavLink} from 'react-router-dom';
import './sidenavigation.css'
import AssessmentIcon from '@material-ui/icons/Assessment';
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';
import EventNoteIcon from '@material-ui/icons/EventNote';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function SideNavigation() {
  return (
    <div className="nav_wrapper" style={{top: 0}}>
      <div className='user_icon'>
          <AccountCircleIcon className='icon' />
      </div>
      <h1>PROFILE</h1>
      <ul>
        <li><AssessmentIcon /><NavLink to="/profile/dashboard" className='nav_link'>Dashboard</NavLink></li>
        <li><EmojiFoodBeverageIcon /><NavLink to="/profile/plates" className='nav_link'>My Plates</NavLink></li>
        <li><EventNoteIcon /><NavLink to="/" className='nav_link'>Calendar</NavLink></li>
      </ul>
    </div>
  )
}

export default SideNavigation
