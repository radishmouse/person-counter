import React, { Component } from 'react';

class Person extends Component {
    constructor(props) {
        super(props);
        // Let's set State
        this.props = props;        
        this.state = {
            score: 0
        };
    }

    checkZero() {
        if (this.state.score > 0) {
            this.setState({ 
                score: this.state.score - 1 
            })
        }
    }

    // Let Make the Add Score Function 
    addScore = () => {
        this.setState({ score: this.state.score + 1 });
    }

    subtractScore = () => {
        this.checkZero()
        
    }

    render() {
        console.log(`yay ${this.props.name} rendered!`);
        return (
            <div>
            {/* Let's Render out the Button inside of the Person */}
                <span>{this.props.name}: {this.state.score}</span>
                <button onClick={this.addScore}>+1</button>
                <button onClick={this.subtractScore}>-1</button>
            </div>
        );
    }
}

export default Person;