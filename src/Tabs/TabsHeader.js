import React, { Component, PropTypes } from 'react';
import getStyles from '../utils/getStyles';
import * as styles from './styles';

const TabsWrapper = getStyles(styles);

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
