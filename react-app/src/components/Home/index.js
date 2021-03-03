import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '500px',
    backgroundColor: 'pink'
  }
}))

export default function Home () {
  const classes = useStyles()
  return (
    <div className={classes.root}>

    </div>
  )
}
