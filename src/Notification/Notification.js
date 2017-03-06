import React, { Component, PropTypes } from 'react';
import MdClose from 'react-icons/lib/md/close';
import MdWarning from 'react-icons/lib/md/warning';
import MdInfo from 'react-icons/lib/md/info';
import MdError from 'react-icons/lib/md/error';
import MdCheckCircle from 'react-icons/lib/md/check-circle';
import { NotificationWrapper } from './styles';

export default class Notification extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.children !== this.props.children ||
      nextProps.message !== this.props.message ||
      nextProps.type !== this.props.type
  }

  render() {
    const icon = (this.props.type === 'warning' ?
      <MdWarning /> :
      this.props.type === 'error' ?
        <MdError /> :
        this.props.type === 'success' ?
          <MdCheckCircle /> :
          '');


    return (
      <NotificationWrapper type={this.props.type}>
        {icon}
        <span>{this.props.children}</span>
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

Notification.defaultProps = {
  type: 'info'
};

