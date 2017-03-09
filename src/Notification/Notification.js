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
    switch (this.props.type) {
      case 'warning': return <WarningIcon />;
      case 'error': return <ErrorIcon />;
      case 'success': return <SuccessIcon />;
      default: return null;
    }
  };

  render() {
    return (
      <NotificationWrapper type={this.props.type}>
        {this.getIcon()}
        <span>{this.props.children}</span>
        {this.props.onClose &&
          <button onClick={this.props.onClose}><CloseIcon /></button>
        }
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
