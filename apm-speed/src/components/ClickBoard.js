/*
    - This component will load a basic board of 1 row of 5 boxes

*/

import React from 'react';

export default class ClickBoard extends React.Component {
    constructor(props){
        super(props);
        this.loadBoxes = this.loadBoxes.bind(this);
    }
    loadBoxes(){
        let target = document.getElementById('cbc-boxLoading-target');
        let boxDiv;
        for (var i = 1; i <= 5; i++){
            boxDiv = document.createElement('div');
            boxDiv.id = 'box-' + i;
            boxDiv.classList.add('cbc-boxes');
            boxDiv.addEventListener('click', (e) => console.log(e.target.id));
            target.appendChild(boxDiv);
            console.log(i);
        }
        console.log("boxes loaded");
    }
    componentDidMount(){
        this.loadBoxes();
    }
    render(){
        
        return (
            <div id="clickboard-component">
                <div className="cbc-title">Component ClickBoard Container (Below are the 5 boxes)</div>
                <div id="cbc-boxLoading-target"></div>
            </div>
        )
    }
} 