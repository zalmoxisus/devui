import React, { Component, PropTypes } from 'react';
import getStyles from '../utils/getStyles';
import * as styles from './styles';

const NotificationWrapper = getStyles(styles, 'div', true);

export default class Notification extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.children !== this.props.children ||
      nextProps.message !== this.props.message ||
      nextProps.type !== this.props.type
  }

  render() {
    return (
      <NotificationWrapper>
        {this.props.children}
      </NotificationWrapper>
    );
  }
}

Notification.propTypes = {
  children: PropTypes.any.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary', 'default', 'info', 'success', 'warning', 'error']),
  onClick: PropTypes.func
};

