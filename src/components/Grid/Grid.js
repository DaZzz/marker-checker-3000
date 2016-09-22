import React from 'react'
import classes from './Grid.scss'

// Not sure that we need a d3 for that
export const Grid = () => (
  <div className={classes.container}>
    <div className={classes.vertical}>
      {
        (new Array(10)).fill(0).map((_, i) => (
          <div key={i} className={classes.vline}>
            <div className={classes.vnumber}>
              {i + 1}
            </div>
          </div>
        ))
      }
    </div>

    <div className={classes.horizontal}>
      {
        (new Array(10)).fill(0).map((_, i) => (
          <div key={i} className={classes.hline}>
            <div className={classes.hnumber}>
              {i + 1}
            </div>
          </div>
        ))
      }
    </div>

    <div className={classes.points}>
      {
        (new Array(100)).fill(0).map((_, i) => (
          <div key={i} className={classes.point}></div>
        ))
      }
    </div>
  </div>
)

Grid.propTypes = {

}

export default Grid
