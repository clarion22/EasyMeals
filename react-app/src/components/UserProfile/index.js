import React, {useEffect} from 'react'
import {loadUserPlates} from '../../store/plate'

function UserProfile() {

  useEffect(() => {
    console.log('use effect')
  loadUserPlates(1)
  console.log('load user plates after')
  }, [])
  return (
    <div>
      Hey there
    </div>
  )
}

export default UserProfile
