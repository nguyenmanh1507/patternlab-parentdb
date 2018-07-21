// @flow
import React, { Component } from 'react';

type Props = {
  children: any,
  name: string,
  options: Array<{ value: string, title: string }>
};
class SelectMarioManager extends Component<Props, {}> {
  state = {};

  handleClick = () => {
    console.log('click', ref);
    ref.current.focus()
  };

  handleChange = () => {};

  render() {
    const { name, options } = this.props;
    return this.props.children({
      name,
      options,
      handleClick: this.handleClick,
      handleChange: this.handleChange,
      ref: ref
    });
  }
}

const ref = React.createRef();

export default SelectMarioManager;
