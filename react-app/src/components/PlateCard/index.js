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
import { green } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import {loadUserPlates, deletePlate} from '../../store/plate'
import Grid from '@material-ui/core/Grid';
import RecipeCard from './RecipeCard';
import PlateDatePicker from '../PlateDatePicker';
const imageUrl = 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg'




const useStyles = makeStyles({
  root: {
    maxWidth: 620,
    boxShadow: "5px 3px 11px 1px rgba(0,0,0,0.5)",
    marginTop: 50,
    paddingBottom: 10,
    boxSizing: 'border-box',
    padding: 15
  },
  media: {
    height: 140,
  },
  avatar: {
    backgroundColor: green[900],
  },
  card: {
    minWidth: 300,
    display: 'inline-block'
  }
});


function PlateCard() {
  const classes = useStyles();
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(loadUserPlates(1))
  },[dispatch])

  const plates = useSelector(state => Object.values(state.plate))
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (plates && plates.length) setLoaded(true)
   }, [plates.length])

   const handleDelete = (plateId) => {
      dispatch(deletePlate(plateId))
   }


   if (plates && plates.length === 0) return ""

   if (!loaded) {
     return (
       <div>Loading...</div>
     )
   }

  return (
    <div style={{minWidth: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
      {plates.map((plate, i) => (
        <Paper className={classes.root}>
        <Grid container spacing={1} style={{wordBreak: 'break-word'}} >
          <Grid item xs={12}>
               <CardHeader
                 avatar={
                   <Avatar aria-label="recipe" className={classes.avatar}>
                   R
                 </Avatar>
                }
                  title={plate.date}
                />
               </Grid>
               <Grid item container direction="column" xs={6}>
                     <RecipeCard i={i} foodGroup={'carbs'}/>
                     <RecipeCard i={i} foodGroup={'protein'}/>
                     <RecipeCard i={i} foodGroup={'fruit'}/>
               </Grid>
               <Grid item container direction="column" xs={6}>
                     <RecipeCard i={i} foodGroup={'vegetables'}/>
                     <RecipeCard i={i} foodGroup={'dairy'}/>
                     <PlateDatePicker />
                     <button style={{marginTop: '50px'}} onClick={() => handleDelete(plate.id)} >Delete</button>
               </Grid>
        </Grid>
      </Paper>
      ))}
    </div>
  )
}

export default PlateCard;
