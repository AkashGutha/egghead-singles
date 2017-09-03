import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProcessImage from 'react-imgpro';

class App extends Component {
  render() {
    return (
     <ProcessImage 
      image="http://365.unsplash.com/assets/paul-jarvis-9530891001e7f4ccfcef9f3d7a2afecd.jpg"
      colors={{
        mix:{
          color:'red',
          amount: 50
        }

      }}
      blur={10}
      invert={true}
      resize={{
        height:256,
        width: 256
      }}
     />
    );
  }
}

export default App;
