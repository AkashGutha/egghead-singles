import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Markdown from 'react-remarkable';

class App extends Component {
  render() {
    return (
      <div>
        <Markdown source="# This is a heading" />

      <Markdown>

        **bold text**

        

      </Markdown>
      </div>
    );
  }
}

export default App;
