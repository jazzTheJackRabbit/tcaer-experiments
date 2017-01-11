import React, { Component } from 'react';
import {connect} from 'redux'
import {Link} from 'react-router'

export default class App extends Component {
  render() {
    return (
      <div>
      	<div className="ui sticky secondary pointing menu">
      		<Link className="item" to="/">Home</Link>
      		<Link className="item" to="/create">Create</Link>
      	</div>
      	{this.props.children}
      </div>
    );
  }
}
