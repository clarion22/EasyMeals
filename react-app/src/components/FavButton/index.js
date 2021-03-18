import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {addPlateToFavorite, removePlateFavorite} from '../../store/plate'

function FavButton({plateId, favorite}) {
  const dispatch = useDispatch()
  const [toggleSave, setToggleSave] = useState(favorite)


  const handleSavePlate = (plateId) => {
    setToggleSave(true)
    dispatch(addPlateToFavorite(plateId))
 }

 const handleUnsavePlate = (plateId) => {
    setToggleSave(false)
    dispatch(removePlateFavorite(plateId))
 }

 useEffect(() => {}, [toggleSave])

  return (
    <div>
      {toggleSave ? <a onClick={() => handleUnsavePlate(plateId)}><FavoriteIcon /></a> :
      <a onClick={() => handleSavePlate(plateId)}><FavoriteBorderIcon /></a>}
    </div>
  )
}

export default FavButton
