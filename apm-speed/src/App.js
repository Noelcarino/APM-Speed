import React from 'react';
import Header from './components/Header';
export default class App extends React.Component {
  render(){
    return (
      <div className="app-container">

        <div className="header-container">
          <Header />
        </div>

      </div>
    )
  }
}
