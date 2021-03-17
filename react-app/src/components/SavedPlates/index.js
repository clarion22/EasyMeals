
import React, {useEffect} from 'react'
import SideNavigation from '../SideNavigation';
import './saveplate.css'
import FavoriteCard from './FavoriteCard'
import Grid from '@material-ui/core/Grid';

function SavedPlates() {
  return (
    <div style={{height: '100%', bottom: 0, backgroundColor: '#f4fff8', display: 'flex'}}>
      <SideNavigation />
      <div className="myplate_wrapper">
        <Grid container spacing={1} >
          <Grid item xs={12}>
              <FavoriteCard/>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default SavedPlates
