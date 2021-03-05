import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';


function PlateSelect({foodType}) {
  const recipes = useSelector(state => state.recipe[foodType])
  const [group, setGroup] = useState('')
  const [toggle, setToggle] = useState(false)
  const [filteredFood, setFilteredFood] = useState(['All'])
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
      if (recipes && recipes.length) setLoaded(true);
      if (recipes) setFilteredFood(recipes.filter(recipe => recipe.food_category === group))
  }, [recipes, group]);


  const handleGroup = (e) => {
    setGroup(e.target.value)
  }

  const showRecipes = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    if (recipes) setGroup(recipes[0].food_category)
  }, [loaded])


if (!loaded) {
  return null;
}

  return (
    <div style={{marginTop: '20px'}}>
      <Accordion>
        <AccordionSummary  expandIcon={<ExpandMoreIcon />}>
          <Typography>{foodType.toUpperCase()}</Typography>
        </AccordionSummary>
          <AccordionDetails>
            <form>
              <label>Select a Protein Category</label>
              <select onChange={handleGroup}>
                {recipes.map(recipe => (
                  <option key={recipe.title} value={recipe.food_category}>{recipe.food_category}</option>
                ))}
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
