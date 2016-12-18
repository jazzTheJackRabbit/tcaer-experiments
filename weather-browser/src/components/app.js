import React, { Component } from 'react';
import {connect} from 'redux'
import SearchBar from './component_search_bar'

export default class App extends Component {
  render() {
    return (
      <div>
      	<SearchBar />
      </div>
    );
  }
}
