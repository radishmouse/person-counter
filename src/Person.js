import React, { Component } from 'react';

// function Person(props) {
//   return (
//     <span>{props.name}</span>
//   );
// }

class Person extends Component {
    constructor(props) {
        super(props);
        // this.props = props;        
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        console.log(`yay ${this.props.name} mounted!`);
        setInterval(() => {
            this.setState({
                count: this.state.count + 1
            });
        }, this.props.freq);
    }

    render() {
        console.log(`yay ${this.props.name} rendered!`);
        return (
            <span>{this.props.name}: {this.state.count}</span>
        );
    }
}

export default Person;