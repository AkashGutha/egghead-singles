import React, { Component } from 'react';
import './App.css';

class App extends Component {

  focus = () => {
    this.inNode.focus()
    console.log(this.inNode)
  }

  render() {
    return (
      <div className="App">
        <input
          type="text"
          placeholder="text input"
          ref={node => this.inNode = node }
        />
        <button onClick={this.focus}>
          Focus Input
        </button>
      </div>
    )
  }
  
}

export default App;
