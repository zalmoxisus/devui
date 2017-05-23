import React, { Component } from 'react';
import PropTypes from 'prop-types';
import createStyledComponent from '../utils/createStyledComponent';
import * as styles from './styles';

const TabsWrapper = createStyledComponent(styles);

export default class TabsHeader extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.tabs !== this.props.tabs || nextProps.main !== this.props.main;
  }

  render() {
    return (
      <TabsWrapper main={this.props.main}>
        <div>{this.props.tabs}</div>
      </TabsWrapper>
    );
  }
}

TabsHeader.propTypes = { tabs: PropTypes.array.isRequired, main: PropTypes.bool };
