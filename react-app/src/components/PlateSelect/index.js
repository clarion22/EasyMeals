import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';


function PlateSelect() {
  const recipes = useSelector(state => state.recipe.protein)
  const [group, setGroup] = useState('Chicken')
  const [toggle, setToggle] = useState(false)
  const [filteredFood, setFilteredFood] = useState([])
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
      if (recipes && recipes.length) setLoaded(true);
      if (recipes) setFilteredFood(recipes.filter(recipe => recipe.food_category === group))
  }, [recipes, group]);

  useEffect(() => {

  }, [group])

  const handleGroup = (e) => {
    setGroup(e.target.value)
  }

  const showRecipes = (e) => {
    e.preventDefault()
    setToggle(true)
  }


if (!loaded) {
  return null;
}

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
                <option value="Beef">Beef</option>
                <option value="Tofu">Tofu</option>
              </select>
              {filteredFood.map(recipe => (
                <div key={recipe.id} style={{borderTop: 'solid 1px black'}}>
                  <div>{recipe.title}</div>
                  <div>{recipe.cook_time}</div>
                  <div><img style={{height: '50px'}} src={recipe.img_link} alt='food' /></div>
                </div>
              ))}
            </form>
          </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default PlateSelect;
