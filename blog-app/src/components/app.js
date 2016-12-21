import React, { Component } from 'react';
import {connect} from 'redux'

export default class App extends Component {
  render() {
    return (
      <div>
      	Gonna render this for everyone yo!
      	{this.props.children}
      </div>
    );
  }
}
