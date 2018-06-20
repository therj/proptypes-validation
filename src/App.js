import React, { Component } from 'react'
import './App.css'
import Person from './Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Person
          // organization={'ReactDev'}
          firstName={'Rabindra'}
          lastName={'Joshi'}
          gender={'secret'}
        />
      </div>
    )
  }
}

export default App
