import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CalorieForm from '../CalorieForm';


function CreatePlate() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item container direction="column" xs={6}>
          <Paper>xs 2</Paper>
          <Paper>xs 2</Paper>
          <Paper>xs 2</Paper>
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
