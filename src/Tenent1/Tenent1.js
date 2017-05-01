// src/components/About/index.js
import React, { Component } from 'react';
import classnames from 'classnames';

import './Tenent1.css';

class Tenent1 extends Component {
  static propTypes = {}
  static defaultProps = {}
  state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('About', className)} {...props}>
        <h1>
          you are in Tenent1
        </h1>
      </div>
    );
  }
}

export default Tenent1;
