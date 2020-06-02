import React from 'react'

import Button from './Button'
import Store from './Store'
import Avatar from './Avatar'

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

  upgrade = (event) => {
    let type = event.target.value
    let pointIncrease
    let secondIncrease
    let cost
    switch (type) {
      // CLICK UPGRADES
      case 'beanie':
        pointIncrease = 1
        cost = 10
        break
      case 'sneakers':
        pointIncrease = 2
        cost = 20
        break
      case 'jeans':
        pointIncrease = 3
        cost = 30
        break

      // PER SECOND UPGRADES
      case 'paper':
        secondIncrease = 1
        cost = 10
        break
      case 'cleaner':
        secondIncrease = 2
        cost = 20
        break
      case 'checkout':
        secondIncrease = 3
        cost = 30
        break
    }

    if (this.state.points - (cost) >= 0) {
      this.setState({
        points: this.state.points - (cost),
        pointsPerClick: this.state.pointsPerClick + pointIncrease,
        pointsPerSecond: this.state.pointsPerSecond + secondIncrease
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
        <Avatar />
        <Button click={this.increment} />
        <Store click={this.upgrade} />
      </div>
      </>
    )
  }
}

export default App
