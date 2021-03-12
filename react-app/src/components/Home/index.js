import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {NavLink} from 'react-router-dom'
import DietSvg from './Images/DietSvg'
import Grid from '@material-ui/core/Grid';
import './home.css'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '65vh',
    backgroundColor: '#a4ffb6',
    top: 0,
    display: 'flex',
    maxWidth: '100vw',
    flexDirection: 'column'
  }
}))

export default function Home () {
  const classes = useStyles()
  return (
    // <div className={classes.root}>
    //   <div style={{display: 'flex', justifyContent: 'center', minHeight: '85vh'} }>
    //     <div style={{width: '500px', padding: '0 80px', height: '50em', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center'}} >
    //       <h1 style={{fontSize: '3em'}}>Easy Meals</h1>
    //       <h2>Create nutritionally balanced meal plans to fit your lifestyle and fitness needs.</h2>
    //       <div className='getstarted_btn'><NavLink id="started_link" to={'/createplate'}>GET STARTED</NavLink></div>
    //     </div>
    //       <DietSvg />
    //   </div>
    //   <div style={{height: '500px', backgroundColor: 'white'}} >

    //   </div>
    // </div>
    <Grid container >
        <Grid item xs={1}>
          <div style={{backgroundColor: '#a4ffb6', height: '85vh'}}></div>
        </Grid>
        <Grid item xs={3}>
        <div style={{backgroundColor: '#a4ffb6', height: '85vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center'}}>
            <span style={{fontSize: '2vw'}}>Easy Meals</span>
            <span>Create nutritionally balanced meal plans to fit your lifestyle and fitness needs.</span>
            <div className='getstarted_btn'><NavLink id="started_link" to={'/createplate'}>GET STARTED</NavLink></div>
        </div>
        </Grid>
        <Grid item xs={8}>
        <div style={{backgroundColor: '#a4ffb6', height: '85vh'}}>
          <DietSvg />
        </div>
        </Grid>
    </Grid>
  )
}
