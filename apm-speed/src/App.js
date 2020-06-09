import React from 'react';
import Header from './components/Header';
import Timer from './components/Timer';
import ClickBoard from './components/ClickBoard';
export default class App extends React.Component {
  render(){
    return (
      <div className="app-container">

        <div className="header-container">
          <Header />
        </div>

        <div className="clickboard-container">
          <ClickBoard />
        </div>

        <div className="timer-container">
          <Timer />
        </div>



      </div>
    )
  }
}
