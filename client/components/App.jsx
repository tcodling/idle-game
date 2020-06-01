import React from 'react'

import Button from './Button'

class App extends React.Component {
  state = {
    points: 0
  }

  increment = () => {
    this.setState({
      points: this.state.points + 1
    })
  }

  render() {
    return (
      <>
      <h1>Idle game</h1>
      <h2>Points: {this.state.points}</h2>
      <Button click={this.increment} />
      </>
    )
  }
}

export default App
