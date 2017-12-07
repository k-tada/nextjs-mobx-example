import { observable, action, computed, observe } from 'mobx';

export default class Counter {
  @observable count = 0;

  @computed get twice() {
    return this.count * 2;
  }

  @action.bound
  inc() {
    this.count = this.count + 1;
  }

  @action.bound
  dec() {
    this.count = this.count - 1;
  }

  @action.bound
  async asyncInc() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    this.count = this.count + 1;
  }

  @action.bound
  async asyncDec() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    this.count = this.count - 1;
  }
}
