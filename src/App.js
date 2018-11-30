import React, { Component } from 'react';
import Greet from './Greet';
import Person from './Person';
import logo from './logo.svg';
import './App.css';

// Lets Make a List of Players
let playersList = [
  "bob",
  "jose",
  "jocelyn"
]

// Lets Map Out The Players
let renderedPlayers = playersList.map(player => 
  <div>
    <Person name={player}></Person>
  </div>  
);

class App extends Component {
  constructor(props) {
    super(props)
      this.state = null;
  }


  render() {

    console.log(this.state);

    return (
      <div className="App">
        <Greet 
            url="https://google.com" 
            linkText="click here"
        >
        </Greet>
        { renderedPlayers }
      </div>
    );
  }
}

// This is equivalent to module.exports = App;
export default App;
