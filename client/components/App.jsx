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

  upgrade = (event) => {
    let type = event.target.value
    let pointIncrease = 0
    let secondIncrease = 0
    let cost
    switch (type) {
      // CLICK UPGRADES
      case 'paper':
        pointIncrease = 1
        cost = 10
        break
      case 'cleaner':
        pointIncrease = 2
        cost = 20
        break
      case 'checkout':
        pointIncrease = 3
        cost = 30
        break

      // PER SECOND UPGRADES
      case 'plant1':
        secondIncrease = 1
        cost = 10
        break
      case 'plant2':
        secondIncrease = 2
        cost = 20
        break
      case 'plant3':
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
      <h1>Cash Grabber</h1>
      <h2>${this.state.points}</h2>
      <h2>Dollars per click: {this.state.pointsPerClick}</h2>
      <h2>Dollars per second: {this.state.pointsPerSecond}</h2>
      <div id='mainContainer'>
        <Store jobs={true} click={this.upgrade} />
        <Button click={this.increment} />
        <Store jobs={false} click={this.upgrade} />
      </div>
      </>
    )
  }
}

export default App
