import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {NavLink} from 'react-router-dom'
import DietSvg from './Images/DietSvg'
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LanguageIcon from '@material-ui/icons/Language';
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
    <Grid container >
        <Grid item xs={1}>
          <div style={{backgroundColor: '#a4ffb6', height: '90vh'}}></div>
        </Grid>
        <Grid item xs={3}>
        <div style={{backgroundColor: '#a4ffb6', height: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center'}}>
            <span style={{fontSize: '3vw', fontWeight: 'bold'}}>Easy Meals</span>
            <span style={{fontSize: '2vw'}}>Create nutritionally balanced meal plans to fit your lifestyle and fitness needs.</span>
            <div className='getstarted_btn'><NavLink id="started_link" to={'/createplate'}>GET STARTED</NavLink></div>
        </div>
        </Grid>
        <Grid item xs={8}>
        <div style={{backgroundColor: '#a4ffb6', height: '90vh'}}>
          <DietSvg />
        </div>
        </Grid>
        <Grid item xs={12}>
          <div className="home_footer">
            <div className="home_links">
              <a href="https://github.com/clarion22/EasyMeals"><GitHubIcon /></a>
              <a href="https://linkedin.com/in/olga-thompson-35937515a"><LinkedInIcon /></a>
              <a href=""><LanguageIcon /></a>
            </div>
            <div className="home_footer_name">© 2021 Olga Thompson</div>
          </div>
        </Grid>
    </Grid>
  )
}
