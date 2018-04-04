import TestRenderer from 'react-test-renderer';
import flatten from 'lodash/flatten';

export default class Educt {
  constructor(instance) {
    if (instance.root) {
      this._root = instance.root;
      this._component = this._root.children[0];
    } else {
      this._root = instance;
      this._component = instance;
    }
  }

  getInstance() {
    return this._component.instance;
  }

  setProps(props) {
    return this._root.instance.setProps(props);
  }

  setState(state) {
    return this.getInstance().setState(state);
  }

  state() {
    return this.getInstance().state;
  }

  props() {
    return this.getInstance().props;
  }

  text() {
    return flatten(this._root.findAll(() => true).map(inst => inst.children))
      .filter(node => typeof node === 'string')
      .join('');
  }

  findByProps(props) {
    return this.findAllByProps(props)[0];
  }

  findAllByProps(props) {
    //this._root.findAll(q => console.log(q.props));
    return this._root.findAllByProps(props).map(inst => new Educt(inst));
  }
}
