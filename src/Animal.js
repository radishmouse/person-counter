import React, { Component } from 'react';

const catUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Catto.jpg/1036px-Catto.jpg';


function magicTrick(e) {
    e.target.setAttribute('src', catUrl)
  }

function Animal(props) {
    return (
        <img src={props.imgurl} onClick={magicTrick} />
    )
}

export default Animal