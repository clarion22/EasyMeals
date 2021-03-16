import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {loadUserPlates} from '../../store/plate'
import PlateCard from '../PlateCard'
import SideNavigation from '../SideNavigation';


function UserProfile() {
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user)

  useEffect(() => {
      console.log('use effect')
      dispatch(loadUserPlates(sessionUser.id))
      console.log('load user plates after')
  }, [dispatch])

  return (
    <div style={{height: '100%', bottom: 0, backgroundColor: '#fff4f6'}}>
      <SideNavigation />
    </div>
  )
}

export default UserProfile
