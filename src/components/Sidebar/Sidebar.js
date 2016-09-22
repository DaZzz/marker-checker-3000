import React from 'react'
import classes from './Sidebar.scss'

export const Sidebar = (props) => (
  <div className={classes.sidebar}>
    <div className={classes.marker}>1,4</div>
    <div className={classes.marker}>2,4</div>
    <div className={classes.marker}>1,5</div>
    <div className={classes.marker}>3,7</div>
  </div>
)

Sidebar.propTypes = {
}

export default Sidebar
