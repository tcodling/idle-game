import React from 'react'

import Button from './Button'
import Store from './Store'

class App extends React.Component {
  state = {
    points: 0,
    pointsPerClick: 1,
    pointsPerSecond: 0
  }

  componentDidMount = () => {
    this.interval = setInterval(() => {
      this.setState({
        points: this.state.points + this.state.pointsPerSecond
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  increment = () => {
    this.setState({
      points: this.state.points + this.state.pointsPerClick
    })
  }

  upgradeClick = (event) => {
    let type = event.target.value
    let increase
    switch (type) {
      case 'beanie':
        increase = 1
        break
      case 'sneakers':
        increase = 2
        break
      case 'jeans':
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

  upgradePerSecond = () => {
    let type = event.target.value
    let increase
    switch (type) {
      case 'paper':
        increase = 1
        break
      case 'cleaner':
        increase = 2
        break
      case 'checkout':
        increase = 3
        break
    }

    if (this.state.points - (increase * 10) >= 0) {
      this.setState({
        points: this.state.points - (increase * 10),
        pointsPerSecond: this.state.pointsPerSecond + increase
      })
    } else {
      alert('not enough points')
    }
  }

  render() {
    return (
      <>
      <h1>Money Collector</h1>
      <h2>${this.state.points}</h2>
      <h2>Dollars per click: {this.state.pointsPerClick}</h2>
      <h2>Dollars per second: {this.state.pointsPerSecond}</h2>
      <div id='mainContainer'>
        <Button click={this.increment} />
        <Store upSecond={this.upgradePerSecond} upClick={this.upgradeClick} />
      </div>
      </>
    )
  }
}

export default App
