import React, { Component } from 'react';
import logo from './logo.svg';
import Loading from './components/Loading'
import './App.css';

class App extends Component {

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Loading/>
        </header>
      </div>
    );
  }
}

export default App;
