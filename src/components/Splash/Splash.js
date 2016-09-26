import React from 'react'
import classes from './Splash.scss'

class Splash extends React.Component {

  static propTypes = {
    isValid: React.PropTypes.bool,
    isShown: React.PropTypes.bool
  }

  render () {
    const { isValid, isShown } = this.props

    return (
      <div className={isShown ? classes.shown : classes.hidden}>
        <div className={isValid ? classes.correct : classes.incorrect}>
          {isValid ? 'Correct! You are awesome!' : 'Error! Try again!'}
        </div>
      </div>
    )
  }
}

export default Splash
