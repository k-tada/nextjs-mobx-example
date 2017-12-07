import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import store from '../stores';
import Main from '../components/Main';

export default class App extends Component {
  render() {
    return (
      <Provider {...store}>
        <Main />
      </Provider>
    );
  }
}

