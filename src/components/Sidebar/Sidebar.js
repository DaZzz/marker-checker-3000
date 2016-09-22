import React from 'react'
import classes from './Sidebar.scss'
import Marker from '../Marker'

import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'


// @DragDropContext(HTML5Backend)
// export const Sidebar = (props) => (
//   <div className={classes.sidebar}>
//     <Marker />
//     <Marker />
//     <Marker />
//     <Marker />

//     {<div className={classes.marker}>1,4</div>
//     <div className={classes.marker}>2,4</div>
//     <div className={classes.marker}>1,5</div>
//     <div className={classes.marker}>3,7</div>}
//   </div>
// )

// Sidebar.propTypes = {
// }

// ---
// Component
// ---

class Sidebar extends React.Component {

  render () {
    return (
      <div className={classes.sidebar}>
        <Marker />
        <Marker />
        <Marker />
        <Marker />
      </div>
    )
  }
}

export default Sidebar
