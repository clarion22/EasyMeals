import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux';
import {loadUserPlates} from '../../store/plate'
import PlateCard from '../PlateCard'
import SideNavigation from '../SideNavigation';


function UserProfile() {
  const dispatch = useDispatch()

  useEffect(() => {
      console.log('use effect')
      dispatch(loadUserPlates(1))
      console.log('load user plates after')
  }, [])

  return (
    <div style={{height: '100%', bottom: 0, backgroundColor: '#fff4f6'}}>
      <SideNavigation />
    </div>
  )
}

export default UserProfile
