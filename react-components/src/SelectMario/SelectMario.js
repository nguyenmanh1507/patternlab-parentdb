// @flow
import React, { Component, Fragment } from 'react';

import SelectMarioManager from './SelectMarioManager';

type Props = {
  name: string,
  options: Array<{ value: string, title: string }>
};
class SelectMario extends Component<Props> {
  render() {
    const { name, options } = this.props;

    return (
      <SelectMarioManager name={name} options={options}>
        {({ state, name, options, ref, handleClick, handleChange }) => (
          <Fragment>
            <div className="form__control" style={styles} onClick={handleClick}>
              heelo
              <i className="fas fa-sort" />
            </div>
            <select
              name={name}
              onChange={handleChange}
              // style={{ display: 'none' }}
              ref={ref}
            >
              {options.map(o => (
                <option value={o.value} key={o.value}>
                  {o.title}
                </option>
              ))}
            </select>
          </Fragment>
        )}
      </SelectMarioManager>
    );
  }
}

const styles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
};

export default SelectMario;
