import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';


function PlateSelect() {
  const recipes = useSelector(state => Object.values(state.recipe))
  const [group, setGroup] = useState('Chicken')
  const [flavor, setFlavor] = useState('Greek')
  const [toggle, setToggle] = useState(false)
  const handleGroup = (e) => {
    setGroup(e.target.value)
  }

  const handleFlavor = (e) => {
    setFlavor(e.target.value)
  }

  const showRecipes = () => {
    setToggle(!toggle)
  }

useEffect(() => {
  if (recipes.length) console.log(recipes[0].title)
}, [recipes])


  return (
    <div style={{marginTop: '20px'}}>
      <Accordion>
        <AccordionSummary  expandIcon={<ExpandMoreIcon />}>
          <Typography>Protein</Typography>
        </AccordionSummary>
          <AccordionDetails>
            <form>
              <label>Select a Protein Category</label>
              <select onChange={handleGroup}>
                <option value="Chicken">Chicken</option>
                <option value="Seafood">Seafood</option>
                <option value="Tofu">Tofu</option>
              </select>
              <label>Select a Cuisine Category</label>
              <select onChange={handleFlavor}>
                <option value="Greek">Greek</option>
                <option value="Chinese">Chinese</option>
                <option value="American">American</option>
              </select>
              <button onClick={showRecipes}>Search</button>
              <div>

              <div>{recipes.length ? recipes[0].title : "Loading..."}</div>
              <div>{recipes.length ? recipes[0].cook_time : "Loading..."}</div>
              <div>{recipes.length ? recipes[0].calories : "Loading..."}</div>
            </div>
            </form>
          </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default PlateSelect;
