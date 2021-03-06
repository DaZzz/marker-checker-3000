import React from 'react'
import Sidebar from 'components/Sidebar'
import Grid from 'components/Grid'
import Splash from 'components/Splash'
import CheckButton from 'components/CheckButton'
import classes from './HomeView.scss'

import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

// ---
// Component
// ---
class HomeView extends React.Component {

  static propTypes = {
    actions: React.PropTypes.object,
    markers: React.PropTypes.array,
    validation: React.PropTypes.object
  }

  handlePlaceSiderbarMarker = (id) => {
    this.props.actions.placeMarker({id, x: null, y: null})
  }

  handlePlaceGridMarker = (args) => {
    const { id, x, y } = args
    this.props.actions.placeMarker({id, x, y})
  }

  handleCheck = () => {
    this.props.actions.validate()
  }

  render () {
    const { markers, validation } = this.props
    const gridMarkers = markers.filter(m => m.x !== null || m.y !== null)

    return (
      <div className={classes.container}>
        <Sidebar markers={markers} onPlaceMarker={this.handlePlaceSiderbarMarker} />

        <div className={classes.title}>Marker checker 3000</div>
        <div className={classes.caption}>Place markers on their positions and press check to get the answer!</div>
        <div className={classes.grid}>
          <Grid markers={gridMarkers} onPlaceMarker={this.handlePlaceGridMarker} />
        </div>
        <div className={classes.buttonBlock}>
          <CheckButton isDisabled={gridMarkers.length !== markers.length} onClick={this.handleCheck} />
        </div>

        <Splash isShown={validation.isShown} isValid={validation.isValid} />
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(HomeView)
