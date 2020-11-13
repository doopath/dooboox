import React, { Component } from 'react'
import logo from '../logo.svg';
import '../css/App.css';

const title = <p className="app-title">APP BLOCK</p>

class App extends Component {
  render () {
    return (
      <div className="App">
        { title }
      </div>
    )
  }
}

export default App;
