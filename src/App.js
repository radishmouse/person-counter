import React, { Component } from 'react';
import Greet from './Greet';
import Person from './Person';
import logo from './logo.svg';
import './App.css';

// function App(props) {
//   return (
//     <div className="App">
//       <h1>Hey</h1>
//     </div>    
//   );
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet 
            url="https://google.com" 
            linkText="click here"
        >
          <Person name="Jeffles" freq={10} />
          ,
          <Person name="Derek" freq={10000}/>
          ,
          <Person name="Janet" freq={700}/>
        </Greet>
      </div>
    );
  }
}

// This is equivalent to module.exports = App;
export default App;
