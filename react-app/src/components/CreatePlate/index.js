import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CalorieForm from '../CalorieForm';
import './createplate.css'

function CreatePlate() {
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
              </Paper>
            </Grid>
            <Grid item xs={6}>
            <Paper>
              <h6>Carbs</h6>
            </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper>
                <h6>Protein</h6>
              </Paper>
            </Grid>
            <Grid item xs={6}>
            <Paper>
              <h6>Vegetables</h6>
            </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper>
                <h6>Dairy</h6>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container direction="column" xs={6}>
          <Paper>
             <CalorieForm />
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default CreatePlate
