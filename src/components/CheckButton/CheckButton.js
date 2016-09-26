import React from 'react'
import classes from './CheckButton.scss'

export const CheckButton = (props) => (
  <div className={classes.wrapper}>
    <div className={classes.tooltip}></div>
    <button className={classes.button}>Check!</button>
  </div>
)

export default CheckButton