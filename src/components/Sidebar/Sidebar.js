import React from 'react'
import classes from './Sidebar.scss'
import Marker from '../Marker'

import { DropTarget } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

// ---
// Drop handler
// ---
const sidebarTarget = {
  drop (props, monitor, component) {
    const id = monitor.getItem().id
    props.onPlaceMarker(id)
  }
}

// ---
// Component
// ---
class Sidebar extends React.Component {

  static propTypes = {
    markers: React.PropTypes.array.isRequired
  }

  render () {
    const { connectDropTarget } = this.props

    return connectDropTarget(
      <div className={classes.sidebar}>
        {
          this.props.markers.map(m => (
            m.x === null && m.y === null
              ? (<Marker
                  key={m.id}
                  id={m.id}
                  x={m.expectedX}
                  y={m.expectedY}
                />)
              : (<div key={m.id} className={classes.markerPlaceholder}>
                  <div className={classes.markerInner}> </div>
                </div>)
          ))
        }
      </div>
    )
  }
}


export default DropTarget('marker', sidebarTarget, connect => ({
  connectDropTarget: connect.dropTarget()
}))(Sidebar)

// export default Sidebar
