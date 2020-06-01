import React from 'react'

import Button from './Button'
import Store from './Store'
import Store2 from './Store2'

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
    let type = event.target.innerHTML
    let increase
    switch (type) {
      case 'Beanie $10':
        increase = 1
        break
      case 'Sneakers $20':
        increase = 2
        break
      case 'Jeans $30':
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
    let type = event.target.innerHTML
    let increase
    switch (type) {
      case 'Paper Run $10':
        increase = 1
        break
      case 'Cleaner $20':
        increase = 2
        break
      case 'Checkout Operator $30':
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
      <h2>$ per click: {this.state.pointsPerClick}</h2>
      <h2>$ per second: {this.state.pointsPerSecond}</h2>
      <div id='mainContainer'>
        <Store click={this.upgradeClick} />
        <Button click={this.increment} />
        <Store2 click={this.upgradePerSecond} />
      </div>
      </>
    )
  }
}

export default App
