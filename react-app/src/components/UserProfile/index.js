import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux';
import {loadUserPlates} from '../../store/plate'
import PlateCard from '../PlateCard'



function UserProfile() {
  const dispatch = useDispatch()

  useEffect(() => {
      console.log('use effect')
      dispatch(loadUserPlates(1))
      console.log('load user plates after')
  }, [])

  return (
    <div>
      <PlateCard />
    </div>
  )
}

export default UserProfile
