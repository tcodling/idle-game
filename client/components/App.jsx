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

  upgrade = (event) => {
    let type = event.target.innerHTML
    let increase
    switch (type) {
      case 'Upgrade A':
        increase = 1
        break
      case 'Upgrade B':
        increase = 2
        break
      case 'Upgrade C':
        increase = 3
        break
    }

    if (this.state.points - (increase * 10) >= 0) {
      this.setState({
        points: this.state.points - (increase * 10),
        pointsPerClick: this.state.pointsPerClick + increase
      })
    } else {
      alert('not enough points')
    }
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
