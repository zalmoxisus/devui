import React, { Component, PropTypes } from 'react';
import CloseIcon from 'react-icons/lib/md/close';
import WarningIcon from 'react-icons/lib/md/warning';
import ErrorIcon from 'react-icons/lib/md/error';
import SuccessIcon from 'react-icons/lib/md/check-circle';
import getStyles from '../utils/getStyles';
import { style } from './styles';

const NotificationWrapper = getStyles(style, 'div');

export default class Notification extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.children !== this.props.children ||
      nextProps.type !== this.props.type;
  }
  getIcon = () => {
    let icon;
    if (this.props.type === 'warning') {
      icon = <WarningIcon />;
    } else if (this.props.type === 'error') {
      icon = <ErrorIcon />;
    } else if (this.props.type === 'success') {
      icon = <SuccessIcon />;
    } else icon = '';
    return icon;
  };

  render() {
    return (
      <NotificationWrapper type={this.props.type}>
        {this.getIcon()}
        <span>{this.props.children}</span>
        <CloseIcon onClick={this.props.onClose} />
      </NotificationWrapper>
    );
  }
}

Notification.propTypes = {
  children: PropTypes.any.isRequired,
  type: PropTypes.oneOf(['info', 'success', 'warning', 'error']),
  onClose: PropTypes.func
};

Notification.defaultProps = {
  type: 'info'
};

