import React from 'react'

import Button from './Button'
import Store from './Store'

class App extends React.Component {
  state = {
    points: 0,
    pointsPerClick: 1
  }

  increment = () => {
    this.setState({
      points: this.state.points + this.state.pointsPerClick
    })
  }

  upgrade = () => {
    this.setState({
      pointsPerClick: this.state.pointsPerClick + 1
    })
  }

  render() {
    return (
      <>
      <h1>Idle game</h1>
      <h2>Points: {this.state.points}</h2>
      <h2>Points per click: {this.state.pointsPerClick}</h2>
      <Button click={this.increment} />
      <Store click={this.upgrade} />
      </>
    )
  }
}

export default App
