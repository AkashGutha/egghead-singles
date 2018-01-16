import React, { Component } from 'react';
import Image from 'react-graceful-image'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Image src="https://raw.githubusercontent.com/rexxars/react-hexagon/HEAD/logo/react-hexagon.png"
       width="300"
       height="300"
       placeholderColor="#bef"
       alt="react logo"
       />
       akash
      </div>
    );
  }
}

export default App;

