import React from 'react'

import Button from './Button'
import Progress from './Progress'
import Store from './Store'


class App extends React.Component {
  state = {
    points: 10,
    progress: 0,
    progressPerClick: 1,
    pointsPerSecond: 0
  }

  componentDidMount = () => {
    this.interval = setInterval(() => {
      this.setState({
        points: this.state.points + this.state.pointsPerSecond / 10
      })
    }, 100)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  increment = () => {
    this.setState({
      progress: this.state.progress + this.state.progressPerClick
    })
  }

  upgrade = (event) => {
    let type = event.target.value
    let progressIncrease = 0
    let secondIncrease = 0
    let cost
    switch (type) {
      // CLICK UPGRADES
      case 'mud':
        progressIncrease = 1
        cost = 10
        break
      case 'wood':
        progressIncrease = 2
        cost = 20
        break
      case 'metal':
        progressIncrease = 3
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
      console.log(progressIncrease)
      this.setState({
        points: this.state.points - (cost),
        progressPerClick: this.state.progressPerClick + progressIncrease,
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
      <h2>${this.state.points.toFixed(2)}</h2>
      <h2>Build speed: {this.state.progressPerClick}</h2>
      <h2>Dollars per second: {this.state.pointsPerSecond}</h2>
      <div id='mainContainer'>
        <Store jobs={true} click={this.upgrade} />
        <Button click={this.increment} />
        <Store jobs={false} click={this.upgrade} />
      </div>
      <Progress percent={this.state.progress} />
      </>
    )
  }
}

export default App
