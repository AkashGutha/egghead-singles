import React, { Component, Fragment } from 'react';

const HeaderFooter = (props) => {
  const { name } = props;

  return (
    <Fragment>
      <div>
        header
        {name}
      </div>
      <div>
        footer
      </div>
    </Fragment>
  );
}

class App extends Component {
  render() {
    return (
      <div>
        <HeaderFooter />
      </div>
    );
  }
}

export default App;
