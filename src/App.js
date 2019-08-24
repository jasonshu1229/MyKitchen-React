import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Tabbar from './Components/Tabbar/Tabbar'

class App extends Component {
  state = {  }
  render() {
    return (
      <div>
        <Tabbar/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
