import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import * as recipeActions from '../../store/recipe';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CalorieForm from '../CalorieForm';
import PlateSelect from '../PlateSelect'
import PlateTable from '../PlateTable'
import DoughnutChart from '../Graphs/DoughnutChart';
import CalorieGraph from '../Graphs/CalorieGraph';
import './createplate.css'

function CreatePlate() {
  const dispatch = useDispatch()
  const recipes = useSelector(state => state.recipes)
  const [recommendation, setRecommendation] = useState({fruit: {amount: 0, unit: "cups"}, dairy: {amount: 0, unit: "cups"},  vegetables: {amount: 0, unit: "cups"}, carbs: {amount: 0, unit: "oz"}, protein: {amount: 0, unit: "oz"}})
  const [totalCals, setTotalCals] = useState(0)
  useEffect(() => {
    console.log(recommendation)
  }, [recommendation])

  useEffect(() => {
     dispatch(recipeActions.getRecipes())
  }, [dispatch])

  const resetPlate = () => {
    dispatch(recipeActions.resetFood())
  }


  return (
    <div style={{padding: '20px'}}>
      <Grid container spacing={2}>
        <Grid item container direction="column" xs={6}>
          <Paper style={{height: '400px', display: 'flex', justifyContent: 'space-around'}} className="circle">
            {/* <span className="dot"></span> */}
            <DoughnutChart />
          </Paper>
          <PlateTable />
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Paper>
                <h3>Calories</h3>
                <div style={{fontSize: '28px'}}>{totalCals}</div>
              </Paper>
            </Grid>
            <Grid item xs={6}>
            <Paper>
              <h3>Carbs</h3>
              <div style={{fontSize: '28px'}}>{recommendation.carbs.amount}</div>
              <div style={{fontSize: '28px'}}>{recommendation.carbs.unit}</div>
            </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper>
                <h3>Protein</h3>
                <div style={{fontSize: '28px'}}>{recommendation.protein.amount}</div>
                <div style={{fontSize: '28px'}}>{recommendation.protein.unit}</div>
              </Paper>
            </Grid>
            <Grid item xs={6}>
            <Paper>
              <h3>Vegetables</h3>
              <div style={{fontSize: '28px'}}>{recommendation.vegetables.amount}</div>
              <div style={{fontSize: '28px'}}>{recommendation.vegetables.unit}</div>
            </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper>
                <h3>Dairy</h3>
                <div style={{fontSize: '28px'}}>{recommendation.dairy.amount}</div>
                <div style={{fontSize: '28px'}}>{recommendation.dairy.unit}</div>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper>
                <h3>Dairy</h3>
                <div style={{fontSize: '28px'}}>{recommendation.dairy.amount}</div>
                <div style={{fontSize: '28px'}}>{recommendation.dairy.unit}</div>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container direction="column" xs={6}>
          <Paper>
             <CalorieForm setTotalCals={setTotalCals} setRecommendation={setRecommendation} />
          </Paper>
          <PlateSelect foodType={"protein"}/>
          <PlateSelect foodType={"fruit"}/>
          <PlateSelect foodType={"dairy"}/>
          <PlateSelect foodType={"vegetables"}/>
          <PlateSelect foodType={"carbs"}/>
          <button onClick={resetPlate}>Reset</button>
        </Grid>
      </Grid>
    </div>
  )
}

export default CreatePlate
