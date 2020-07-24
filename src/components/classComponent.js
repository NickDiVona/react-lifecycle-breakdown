import React, { Component } from 'react';

class ClassComponent extends Component {
  componentDidMount() {
    console.log('BLUE MOUNTED');
  }

  componentWillUnmount() {
    console.log('BLUE UNMOUNTED');
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: 'lightblue',
          height: 100,
          width: 100,
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex'
        }}
        onClick={this.props.incrementCount}
      >
        {this.props.count}
      </div>
    );
  }
}

export default ClassComponent;
