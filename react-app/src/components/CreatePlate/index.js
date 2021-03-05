import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import * as recipeActions from '../../store/recipe';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CalorieForm from '../CalorieForm';
import PlateSelect from '../PlateSelect'
import './createplate.css'

function CreatePlate() {
  const dispatch = useDispatch()
  const recipes = useSelector(state => state.recipes)
  const [recommendation, setRecommendation] = useState({fruit: {amount: 0, unit: "cups"}, dairy: {amount: 0, unit: ""},  vegetables: {amount: 0, unit: ""}, carbs: {amount: 0, unit: ""}, protein: {amount: 0, unit: ""}})

  useEffect(() => {
    console.log(recommendation)
  }, [recommendation])

  useEffect(() => {
     dispatch(recipeActions.getRecipes())
  }, [dispatch])
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item container direction="column" xs={6}>
          <Paper style={{height: '400px'}} className="circle">
            <span className="dot"></span>
          </Paper>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Paper>
                <h6>Fruit</h6>
                <div>{recommendation.fruit.amount}</div>
                <div>{recommendation.fruit.unit}</div>
              </Paper>
            </Grid>
            <Grid item xs={6}>
            <Paper>
              <h6>Carbs</h6>
              <div>{recommendation.carbs.amount}</div>
              <div>{recommendation.carbs.unit}</div>
            </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper>
                <h6>Protein</h6>
                <div>{recommendation.protein.amount}</div>
                <div>{recommendation.protein.unit}</div>
              </Paper>
            </Grid>
            <Grid item xs={6}>
            <Paper>
              <h6>Vegetables</h6>
              <div>{recommendation.vegetables.amount}</div>
              <div>{recommendation.vegetables.unit}</div>
            </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper>
                <h6>Dairy</h6>
                <div>{recommendation.dairy.amount}</div>
                <div>{recommendation.dairy.unit}</div>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container direction="column" xs={6}>
          <Paper>
             <CalorieForm setRecommendation={setRecommendation} />
          </Paper>
          <PlateSelect foodType={"protein"}/>
          <PlateSelect foodType={"fruit"}/>
          <PlateSelect foodType={"dairy"}/>
          <PlateSelect foodType={"vegetables"}/>
          <PlateSelect foodType={"carbs"}/>
        </Grid>
      </Grid>
    </div>
  )
}

export default CreatePlate
