import React, {useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import {useSelector, useDispatch} from 'react-redux';
import { red } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import {loadUserPlates} from '../../store/plate'
const imageUrl = 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg'




const useStyles = makeStyles({
  root: {
    maxWidth: 620,
    boxShadow: "5px 3px 11px 1px rgba(0,0,0,0.5)"
  },
  media: {
    height: 140,
  },
  avatar: {
    backgroundColor: red[100],
  },
  card: {
    minWidth: 300,
    display: 'inline-block'
  }
});


function PlateCard() {
  const classes = useStyles();
  const plates = useSelector(state => Object.values(state.plate))
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUserPlates(1))
  },[dispatch])

  useEffect(() => {
    if (loaded === true) console.log('plates', plates)
  }, [loaded])

 useEffect(() => {
  if (plates && plates.length) setLoaded(true)
 }, [plates.length])

 if (!loaded) {
   return (
     <div>Loading...</div>
   )
 }

  return (
    <div>
      <Paper className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
          <Paper className={classes.card}>
          <CardContent>
              <Typography variant='h5'>{plates[1]['carbs'][0]['title']}</Typography>
          </CardContent>
            <div style={{ display: 'flex'}}>
              <img style={{ height: '120px', width: '120px'}} src={plates[1]['carbs'][0]['img_link']} alt="the plete" />
            <div style={{padding: "2px", width: '100%'}}>
              <Typography>
                Cook Time: {plates[1]['carbs'][0]['cook_time']}
              </Typography>
              <Typography>
                Calories: {plates[1]['carbs'][0]['calories']}
              </Typography>
            </div>
            </div>
          </Paper>
          <Paper className={classes.card}>
          <CardContent>
             <Typography variant='h5'>{plates[1]['protein'][0]['title']}</Typography>
          </CardContent>
            <div style={{ display: 'flex'}}>
              <img style={{ height: '120px', width: '120px'}} src={plates[1]['protein'][0]['img_link']} alt="the plete" />
            <div style={{padding: "2px", width: '100%'}}>
              <Typography>
                Cook Time: {plates[1]['protein'][0]['cook_time']}
              </Typography>
              <Typography>
                Calories: {plates[1]['protein'][0]['calories']}
              </Typography>
            </div>
            </div>
          </Paper >
          <Paper className={classes.card}>
          <CardContent>
             <Typography variant='h5'>{plates[1]['dairy'][0]['title']}</Typography>
          </CardContent>
            <div style={{ display: 'flex'}}>
              <img style={{ height: '120px', width: '120px'}} src={plates[1]['dairy'][0]['img_link']} alt="the plete" />
            <div style={{padding: "2px", width: '100%'}}>
              <Typography>
                Cook Time: {plates[1]['dairy'][0]['cook_time']}
              </Typography>
              <Typography>
                Calories: {plates[1]['dairy'][0]['calories']}
              </Typography>
            </div>
            </div>
          </Paper>
          <Paper className={classes.card}>
          <CardContent>
             <Typography variant='h5'>{plates[1]['protein'][0]['title']}</Typography>
          </CardContent>
            <div style={{ display: 'flex'}}>
              <img style={{ height: '120px', width: '120px'}} src={plates[1]['protein'][0]['img_link']} alt="the plete" />
            <div style={{padding: "2px", width: '100%'}}>
              <Typography>
                Cook Time: {plates[1]['protein'][0]['cook_time']}
              </Typography>
              <Typography>
                Calories: {plates[1]['protein'][0]['calories']}
              </Typography>
            </div>
            </div>
          </Paper>
          <Paper className={classes.card}>
          <CardContent>
             <Typography variant='h5'>{plates[1]['protein'][0]['title']}</Typography>
          </CardContent>
            <div style={{ display: 'flex'}}>
              <img style={{ height: '120px', width: '120px'}} src={plates[1]['protein'][0]['img_link']} alt="the plete" />
            <div style={{padding: "2px", width: '100%'}}>
              <Typography>
                Cook Time: {plates[1]['protein'][0]['cook_time']}
              </Typography>
              <Typography>
                Calories: {plates[1]['protein'][0]['calories']}
              </Typography>
            </div>
            </div>
          </Paper>
          </Paper>
    </div>
  )
}

export default PlateCard;
