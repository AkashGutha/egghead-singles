import React, { Component, Fragment } from 'react';

const HeaderFooter = (props) => {
  return (
    <Fragment>
      <div>
        header {props.name}
      </div>
      <div>
        footer
      </div>
    </Fragment>
  );
}

export default class App extends Component {
  render() {
    return (
      <div>
        <HeaderFooter name="akash"/>
      </div>
    );
  }
}

