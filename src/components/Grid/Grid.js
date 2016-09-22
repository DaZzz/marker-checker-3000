import React from 'react'
import classes from './Grid.scss'
import { DropTarget } from 'react-dnd'

const gridTarget = {
  drop (props, monitor, component) {
    const item = monitor.getItem()
    console.log(item)
  }
}

// Not sure that we need a d3 for that
class Grid extends React.Component {

  static propTypes = {
    connectDropTarget: React.PropTypes.func.isRequired
  };

  render () {
    const connectDropTarget = this.props.connectDropTarget

    return connectDropTarget(
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
  }
}

export default DropTarget('marker', gridTarget, connect => ({
  connectDropTarget: connect.dropTarget()
}))(Grid)
