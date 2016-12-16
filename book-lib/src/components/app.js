import React, { Component } from 'react';
import {connect} from 'redux'
import BooksList from './container_books'
import ActiveBook from './container_active_book'


export default class App extends Component {
  render() {
    return (
      <div>
      	<BooksList />
      	<ActiveBook />
      </div>
    );
  }
}
