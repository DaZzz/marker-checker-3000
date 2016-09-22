import React from 'react'
import Grid from 'components/Grid'
import CheckButton from 'components/CheckButton'
import classes from './HomeView.scss'

export const HomeView = () => (
  <div className={classes.container}>
    <div className={classes.title}>Marker checker 3000</div>
    <div className={classes.caption}>Place markers on their positions and press check to get the answer!</div>
    <div className={classes.grid}>
      <Grid />
    </div>
    <div className={classes.buttonBlock}>
      <CheckButton />
    </div>
  </div>
)

export default HomeView
