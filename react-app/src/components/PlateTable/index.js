import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function PlateSelect () {
  const selectedProtein = useSelector(state => state.recipe.selected.Protein)
  const selectedVegetables = useSelector(state => state.recipe.selected.Vegetables)
  const selectedFruit = useSelector(state => state.recipe.selected.Fruit)
  const selectedDairy = useSelector(state => state.recipe.selected.Dairy)
  const selectedCarb = useSelector(state => state.recipe.selected.Carbs)

  function createData(name, recipe, calories, servings) {
    return { name, recipe, calories, servings };
  }

  const [foodChange, setFoodChange] = useState(false)

  useEffect(() => {
    setFoodChange(true)
  }, [selectedProtein, selectedVegetables, selectedFruit, selectedDairy, selectedCarb])




  const rows = [
    createData('Protein', `${selectedProtein ?  selectedProtein.title : "no"}`, `${selectedProtein ?  selectedProtein.calories : "no"}`, 1),
    createData('Carbs', `${selectedCarb ?  selectedCarb.title : "no"}`, `${selectedCarb ?  selectedCarb.calories : "no"}`, 4.3),
    createData('Vegetables', `${selectedDairy ?  selectedDairy.title : "no"}`, `${selectedDairy ?  selectedDairy.calories : "no"}`, 6.0),
    createData('Fruits', `${selectedFruit ?  selectedFruit.title : "no"}`, `${selectedFruit ?  selectedFruit.calories : "no"}`, 4.3),
    createData('Dairy', `${selectedVegetables ?  selectedVegetables.title : "no"}`, `${selectedVegetables ?  selectedVegetables.calories : "no"}`, 3.9),
  ];
  return (
    <TableContainer component={Paper} style={{marginTop: '10px'}}>
      <Table className="" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Food Group</TableCell>
            <TableCell align="right">Recipe</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Servings</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.recipe}</TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.servings}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default PlateSelect
