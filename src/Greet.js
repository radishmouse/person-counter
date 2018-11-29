// #1 import React (and Component if you're doing a class)
import React, { Component } from 'react';

// #2 define a component
function Greet(props){
    return (
      <div>
        <h1>Hello, {props.children}!!</h1>
        <p>You should visit the amazing 
          <a href={props.url}>{props.linkText}</a>
        </p>
      </div>
    );
  }

// #3 export that component
export default Greet;