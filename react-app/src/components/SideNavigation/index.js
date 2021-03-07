import React from 'react'
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
        <li><AssessmentIcon /><a>Dashboard</a></li>
        <li><EmojiFoodBeverageIcon /><a>My Plates</a></li>
        <li><EventNoteIcon /><a>Calendar</a></li>
      </ul>
    </div>
  )
}

export default SideNavigation
