import React, {useEffect} from 'react'
import SideNavigation from '../SideNavigation';
import './myplate.css'
import PlateCard from '../PlateCard'
import Grid from '@material-ui/core/Grid';
 import {loadUserPlates} from '../../store/plate'
 import {useDispatch, useSelector} from 'react-redux';

function MyPlates() {

  return (
    <div style={{height: '100%', bottom: 0, backgroundColor: '#f4fff8', display: 'flex'}}>
      <SideNavigation />
      <div className="myplate_wrapper">
        <Grid container spacing={1} >
          <Grid item xs={12}>
              <PlateCard />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default MyPlates
