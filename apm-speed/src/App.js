import React from 'react';
import Header from './components/Header';
import Controls from './components/Controls';

export default class App extends React.Component {
  render(){
    return (
      <div className="app-container">

        <div className="header-container">
          <Header />
        </div>

        <div className="controller-container">
          <Controls />
        </div>

      </div>
    )
  }
}
