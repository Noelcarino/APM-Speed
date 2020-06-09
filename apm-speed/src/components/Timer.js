import React from 'react';
export default class Timer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            timerStarted: false,
            currentTime: 0,
            interval: ''
        }
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
    }
    startTimer(){
        let time = this.state.currentTime;
        let int;
        if (!this.state.timerStarted) {
            this.setState({timerStarted: true});
            int = setInterval( () => {
                document.getElementById('timer-container').innerHTML = time;
                time++;
                this.setState({currentTime: time})
            } , 1000)
            this.setState({interval: int})
            console.log("timer started"); 
        } else console.log("timer running");
    }
    stopTimer(){
        let clear = this.state.currentTime;
        if (!this.state.timerStarted) console.log("timer not started");
        else {
            clearInterval( this.state.interval);
            document.getElementById('timer-container').innerHTML = clear;
            console.log(this.state.currentTime);
            console.log("timer stopped");
        }
    }
    render(){
        return (
            <div className="component-timer-container">

                <div id="timer-container" className="time-container">0</div>

                <div className="controller-btn-container">
                    <button onClick={this.startTimer}>Start</button>
                    <button onClick={this.stopTimer}>Stop</button>
                </div>
            </div>

        )
    }
}