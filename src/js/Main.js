import React, { Component } from 'react' // Always has global path 'react'
import logo from '../logo.svg';
import '../css/Main.css';

const title = <p className="main-title">MAIN BLOCK</p>

class Main extends Component {
  render () {
    return (
      <div className="Main">
        { title }
      </div>
    )
  }
}

export default Main 