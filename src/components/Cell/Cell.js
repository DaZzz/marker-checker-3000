import React from 'react'
import classes from './Cell.scss'
import { DropTarget } from 'react-dnd'
import Marker from '../Marker'

// ---
// Drop handler
// ---
const cellTarget = {
  drop (props, monitor, component) {
    const id = monitor.getItem().id
    const { onPlaceMarker, x, y } = props
    onPlaceMarker({id, x, y})
  }
}

// ---
// Component
// ---
class Cell extends React.Component {

  static propTypes = {
    connectDropTarget: React.PropTypes.func.isRequired,
    x: React.PropTypes.number.isRequired,
    y: React.PropTypes.number.isRequired,
    marker: React.PropTypes.object,
    onPlaceMarker: React.PropTypes.func.isRequired
  }

  render () {
    const { connectDropTarget, marker } = this.props
    return connectDropTarget(
      <div className={classes.cell}>
        {
          marker
            ? <Marker id={marker.id} x={marker.expectedX} y={marker.expectedY} />
            : null
        }
      </div>
    )
  }
}

export default DropTarget('marker', cellTarget, connect => ({
  connectDropTarget: connect.dropTarget()
}))(Cell)
