import React, { Component, PropTypes } from 'react';
import { getStyles } from '../themes';
import Buttons from './Buttons';
import * as styles from './styles';

const TabsWrapper = getStyles(styles, 'div', true);

export default class TabsHeader extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.tabs !== this.props.tabs || nextProps.buttons !== this.props.buttons;
  }

  render() {
    return (
      <TabsWrapper>
        <div>{this.props.tabs}</div>
        <Buttons buttons={this.props.buttons} />
      </TabsWrapper>
    );
  }
}

TabsHeader.propTypes = {
  tabs: PropTypes.array.isRequired,
  buttons: PropTypes.array
};
