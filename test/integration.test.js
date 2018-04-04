import 'react-native';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { mount } from '../index';

class TestComponent extends Component {
  constructor(props) {
    super(props);

    this.state = { a: 'b' };
  }

  render() {
    return (
      <View testID="view">
        <Text testID="text">
          Hello! <Text>Yeah!</Text>
        </Text>
        <AnotherComp />
      </View>
    );
  }
}

class AnotherComp extends Component {
  render() {
    return (
      <View testID="another-view">
        <Text testID="text">Hallo!</Text>
      </View>
    );
  }
}

describe('educt integration', () => {
  const wrapper = mount(<TestComponent x="y" />);

  test('setProps', () => {
    expect(wrapper.props()).toEqual({
      x: 'y',
    });

    wrapper.setProps({
      q: 'r',
    });

    expect(wrapper.props()).toEqual({
      x: 'y',
      q: 'r',
    });

    wrapper.setProps({
      x: 'b',
      t: 'y',
    });

    expect(wrapper.props()).toEqual({
      x: 'b',
      q: 'r',
      t: 'y',
    });
  });

  test('setState', () => {
    expect(wrapper.state()).toEqual({
      a: 'b',
    });

    wrapper.setState({
      q: 'r',
    });

    expect(wrapper.state()).toEqual({
      a: 'b',
      q: 'r',
    });

    wrapper.setState({
      a: 'x',
      t: 'y',
    });

    expect(wrapper.state()).toEqual({
      a: 'x',
      q: 'r',
      t: 'y',
    });
  });

  test('findByProps', () => {
    expect(wrapper.findByProps({ testID: 'text' }).text()).toEqual('Hello! Yeah!');
  });

  test('findAllByProps', () => {
    const results = wrapper.findAllByProps({ testID: 'text' });
    console.log(results);
    expect(results[0].text()).toEqual('Hello! Yeah!');
    expect(results[1].text()).toEqual('Hallo!');
  });
});
