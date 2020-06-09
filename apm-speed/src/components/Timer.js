import React from 'react';
export default class Timer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            timerStarted: false
        }
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
    }
    startTimer(){
        let time = 0;
        if (!this.state.timerStarted) {
            this.setState({timerStarted: true});
            setInterval( () => {
                document.getElementById('timer-container').innerHTML = time;
                time++;
            } , 1000)

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