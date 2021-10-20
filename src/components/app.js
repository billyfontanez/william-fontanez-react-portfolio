import React, { Component } from 'react';
import moment from "moment"
export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>William Fontanezs Portfolio</h1>
        {moment().format('MMMM Do YYYY, h:mm:ss a')}
      </div>
    );
  }
}
