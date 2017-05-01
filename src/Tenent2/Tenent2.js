// src/components/About/index.js
import React, { Component } from 'react';
import classnames from 'classnames';

import './Tenent2.css';

class Tenent2 extends Component {
  static propTypes = {}
  static defaultProps = {}
  state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('About', className)} {...props}>
        <h1>
          you are in Tenent2
        </h1>
      </div>
    );
  }
}

export default Tenent2;
