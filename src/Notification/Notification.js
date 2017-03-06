import React, { Component, PropTypes } from 'react';
import MdClose from 'react-icons/lib/md/close';
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
      <NotificationWrapper type={this.props.type}>
        {this.props.children}
        <MdClose onClick={this.props.onClose} />
      </NotificationWrapper>
    );
  }
}

Notification.propTypes = {
  children: PropTypes.any.isRequired,
  type: PropTypes.oneOf(['info', 'success', 'warning', 'error']),
  onClose: PropTypes.func
};

