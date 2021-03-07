import React from 'react'
import SideNavigation from '../SideNavigation';
import './myplate.css'
import PlateCard from '../PlateCard'

function MyPlates() {
  return (
    <div style={{height: '100%', bottom: 0, backgroundColor: '#fff4f6', display: 'flex'}}>
      <SideNavigation />
      <div className="myplate_wrapper">
        <PlateCard />
      </div>
    </div>
  )
}

export default MyPlates
