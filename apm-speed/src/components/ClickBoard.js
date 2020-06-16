/*
    - This component will load a basic board of 1 row of 5 boxes

*/

import React from 'react';

export default class ClickBoard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            clicked: []
        }
        this.loadBoxes = this.loadBoxes.bind(this);
        this.pickRandomBox = this.pickRandomBox.bind(this);
        this.resetBoard = this.resetBoard.bind(this);
    }
    resetBoard(){
        this.setState({clicked:[]});
        let currentTarget;
        for (var i = 1; i <= 5; i++){
            currentTarget = document.getElementById("box-" + i);
            currentTarget.classList.remove('cbc-clicked');
            currentTarget.innerHTML = i;

        }
    }
    loadBoxes(){
        let target = document.getElementById('cbc-boxLoading-target');
        let boxDiv;
        for (var i = 5; i >= 1; i--){
            boxDiv = document.createElement('div');
            boxDiv.id = 'box-' + i;
            boxDiv.classList.add('cbc-boxes');
            boxDiv.innerHTML = i;
            boxDiv.addEventListener('click', (e) => this.pickRandomBox(e));
            target.appendChild(boxDiv);
            console.log(i);
        }
        console.log("boxes loaded");
    }
    pickRandomBox(e){
        //if not in state, add to state
        // if in state, return;
        if (this.state.clicked.includes(e.target.id)){
            console.log("you already clicked");
            return;
        }  else {
            let currentBox = document.getElementById(e.target.id);
            currentBox.classList.add('cbc-clicked');
            currentBox.innerHTML = 'Clicked!';
            
            let copyArray = this.state.clicked;
            copyArray.push(e.target.id);
            this.setState({clicked: copyArray});
            console.log(copyArray);
        }
    }
    componentDidMount(){
        this.loadBoxes();
    }
    render(){
        
        return (
            <div id="clickboard-component">
                <div className="cbc-title">Component ClickBoard Container (Below are the 5 boxes)</div>
                <div id="cbc-boxLoading-target"></div>

                <button onClick={this.resetBoard}>Reset Button</button>

            </div>
        )
    }
} 