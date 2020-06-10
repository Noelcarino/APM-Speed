import React from 'react';
import Header from './components/Header';
import Timer from './components/Timer';
import ClickBoard from './components/ClickBoard';
export default class App extends React.Component {
  render(){
    return (
      <div className="app-container">

        <div className="component">
          <Header />
        </div>

        <div className="component">
          <ClickBoard />
        </div>

        <div className="component">
          <Timer />
        </div>



      </div>
    )
  }
}
