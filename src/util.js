import React, { Component } from 'react';

export class WrappedComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      props: {},
      context: {},
    };
  }

  setProps(props) {
    this.setState({
      props: {
        ...this.state.props,
        ...props,
      },
    });
  }

  setContext(context) {
    this.setState({
      context: {
        ...this.state.context,
        ...context,
      },
    });
  }

  render() {
    const { Component } = this.props;
    return <Component {...this.props.props} {...this.state.props} />;
  }
}

export function wrapComponent(component) {
  return React.createElement(WrappedComponent, {
    Component: component.type,
    props: component.props,
  });
}
