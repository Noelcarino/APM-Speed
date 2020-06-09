import React from 'react';

export default class Controls extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            timerStarted: false
        }
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
    }
    startTimer(){
        if (!this.state.timerStarted) {
            this.setState({timerStarted: true});
            console.log("timer started");
        } else console.log("timer running");
    }
    stopTimer(){
        if (!this.state.timerStarted) console.log("timer not started");
        else {
            this.setState({timerStarted: false})
            console.log("timer stopped");
        }
    }
    render(){
        return (
            <div className="controller-btn-container">
                <button onClick={this.startTimer}>Start</button>
                <button onClick={this.stopTimer}>Stop</button>
            </div>
        )
    }
}