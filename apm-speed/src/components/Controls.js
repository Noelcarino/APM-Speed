import React from 'react';

export default class Controls extends React.Component {
    constructor(props){
        super(props);
        this.startTimer = this.startTimer.bind(this);
    }
    startTimer(){
        console.log("hello");
    }
    render(){
        return (
            <div className="controller-btn-container">
                <button onClick={this.startTimer}>Start</button>
            </div>
        )
    }
}