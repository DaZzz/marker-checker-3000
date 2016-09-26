import React from 'react'
import ReactDOM from 'react-dom'
import classes from './Grid.scss'
import { DropTarget } from 'react-dnd'
import * as d3 from 'd3'
import Cell from '../Cell'

// ---
// Component
// ---
class Grid extends React.Component {

  static propTypes = {
    onPlaceMarker: React.PropTypes.func.isRequired
  };

  componentDidMount () {
    const container = ReactDOM.findDOMNode(this.refs.container)
    const margin = {top: 24, right: 24, bottom: 24, left: 24}
    const width = 480 - margin.left - margin.right
    const height = 480 - margin.top - margin.bottom

    // Scale
    const xScale = d3.scaleLinear()
      .domain([1, 10])
      .range([0, width])

    const yScale = d3.scaleLinear()
      .domain([1, 10])
      .range([0, height])

    // Axes
    const xAxis = d3.axisTop(xScale)
      .tickSize(-height, 0)
      .tickPadding([10])

    const yAxis = d3.axisLeft(yScale)
      .tickSize(-width, 0)
      .tickPadding([10])

    // Container
    const svg = d3.select(container).append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
      .append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`)

    svg.append('g')
      .attr('class', classes.xAxis)
      .call(xAxis)

    svg.append('g')
      .attr('class', classes.yAxis)
      .call(yAxis)

    svg.selectAll(classes.point)
        .data(new Array(100).fill(0).map((_, i) => [i % 10 + 1, Math.trunc(i / 10) + 1]))
      .enter()
        .append('circle')
        .attr('class', classes.point)
        .attr('cx', d => xScale(d[0]))
        .attr('cy', d => yScale(d[1]))
        .attr('r', 4)
  }

  render () {
    const { markers } = this.props
    return (
      <div className={classes.container}>
        <div className={classes.svg} ref='container'></div>
        <div className={classes.cells}>
          {(new Array(100)).fill(0).map((_, i) => this.renderCell(i))}
        </div>
      </div>
    )
  }

  renderCell (i) {
    const x = i % 10 + 1
    const y = Math.trunc(i / 10) + 1
    const marker = this.props.markers.filter(m => m.x === x && m.y === y)

    return (
      <Cell
        key={i}
        x={x}
        y={y}
        onPlaceMarker={this.props.onPlaceMarker}
        marker={marker.length > 0 ? marker[0] : null}
      />
    )

  }
}

export default Grid
