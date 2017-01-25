import React, { Component, PropTypes } from 'react';
import getStyles from '../utils/getStyles';
import * as styles from './styles';

const TabsWrapper = getStyles(styles, 'div', true);

export default class TabsHeader extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.tabs !== this.props.tabs;
  }

  render() {
    return (
      <TabsWrapper>
        <div>{this.props.tabs}</div>
      </TabsWrapper>
    );
  }
}

TabsHeader.propTypes = { tabs: PropTypes.array.isRequired };
