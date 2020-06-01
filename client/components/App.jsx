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
      points: this.state.points - 10,
      pointsPerClick: this.state.pointsPerClick + 1
    })
  }

  render() {
    return (
      <>
      <h1>Point Collector</h1>
      <h2>Points: {this.state.points}</h2>
      <h2>Points per click: {this.state.pointsPerClick}</h2>
      <div id='mainContainer'>
        <Button click={this.increment} />
        <Store click={this.upgrade} />
      </div>
      </>
    )
  }
}

export default App
