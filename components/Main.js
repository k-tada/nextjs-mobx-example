import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('counter')
@observer
export default class Main extends Component {
  render() {
    const { counter } = this.props;
    return (
      <div>
        <div>count: {counter.count}</div>
        <div>count*2: {counter.twice}</div>
        <button onClick={counter.inc}>+1</button>
        <button onClick={counter.dec}>-1</button>
        <button onClick={counter.asyncInc}>async +1</button>
        <button onClick={counter.asyncDec}>async -1</button>
      </div>
    );
  }
}

