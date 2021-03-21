import React, {useEffect, useState} from 'react'
import Typography from '@material-ui/core/Typography';
import {useSelector, useDispatch} from 'react-redux';
import {loadUserPlates} from './../../../store/plate';


function FavRecipeCard({i, foodGroup}) {

  const plates = useSelector(state => state.plate.favorite)
  const [loaded, setLoaded] = useState(false);



  useEffect(() => {

  }, [loaded])

 useEffect(() => {
  if (plates &&  plates[i][foodGroup]) setLoaded(true)
 }, [plates])

 if (!loaded) {
   return (
     <div>Loading...</div>
   )
 }

  return (
    <>
      <Typography variant='h5'>{plates[i][foodGroup][0]['title']}</Typography>
         < div style={{ display: 'flex'}}>
             <img style={{ height: '120px', width: '120px', marginRight: '10px'}} src={plates[i][foodGroup][0]['img_link']} alt="the plete" />
             <div style={{padding: "2px", width: '100%'}}>
              <Typography>
                Cook Time: {plates[i][foodGroup][0]['cook_time']}
              </Typography>
              <Typography>
                Calories: {plates[i][foodGroup][0]['calories']}
              </Typography>
            </div>
        </div>
    </>
  )
}

export default FavRecipeCard
