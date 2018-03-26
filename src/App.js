import React, { Component } from 'react';
import Cam from './Cam';
import './App.css';
import QuestionContainer from './QuestionContainer';

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <Cam />
        <QuestionContainer />
      </div>
    );
  }
}

export default App;
