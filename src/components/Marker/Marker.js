import React from 'react'
import classes from './Marker.scss'
import { DragSource } from 'react-dnd'

// ---
// Source
// ---
const markerSource = {

  beginDrag (props) {
    return {x: props.x, y: props.y, id: props.id}
  }

}

// ---
// Component
// ---
class Marker extends React.Component {

  static propTypes = {
    id: React.PropTypes.number.isRequired,
    isPlaced: React.PropTypes.bool.isRequired,
    x: React.PropTypes.number.isRequired,
    y: React.PropTypes.number.isRequired
  }

  render () {
    const { x, y, isPlaced, connectDragSource} = this.props

    return connectDragSource(
      <div className={isPlaced ? classes.markerPlaced : classes.marker}>
        {x}, {y}
      </div>
    )
  }
}

export default DragSource('marker', markerSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))(Marker)
