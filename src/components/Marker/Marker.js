import React from 'react'
import classes from './Marker.scss'
import { DragSource } from 'react-dnd'

// ---
// Source
// ---
const markerSource = {

  beginDrag (props) {
    return {lol: 'lol'}
    // const { id, left, top } = props
    // return { id, left, top }
  }

}

// ---
// Component
// ---
class Marker extends React.Component {

  // static propTypes = {
  //   isDragging: React.PropTypes.bool
  // }

  render () {
    // let id = this.props.id
    let isDragging = this.props.isDragging
    let connectDragSource = this.props.connectDragSource

    return connectDragSource(
      <div className={classes.marker}>
        1, 2
      </div>
    )
  }
}

export default DragSource('marker', markerSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))(Marker)
