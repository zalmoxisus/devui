import React, { Component, PropTypes } from 'react';
import CloseIcon from 'react-icons/lib/md/close';
import WarningIcon from 'react-icons/lib/md/warning';
import ErrorIcon from 'react-icons/lib/md/error';
import SuccessIcon from 'react-icons/lib/md/check-circle';
import { NotificationWrapper } from './styles';

export default class Notification extends Component {
  constructor(props) {
    super(props);
    this.getIcon(props);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.type !== this.props.type) {
      this.getIcon(nextProps);
    }
  }
  shouldComponentUpdate(nextProps) {
    return nextProps.children !== this.props.children ||
      nextProps.type !== this.props.type;
  }
  getIcon = (props) => {
    if (props.type === 'warning') {
      this.icon = <WarningIcon />;
    } else if (props.type === 'error') {
      this.icon = <ErrorIcon />;
    } else if (props.type === 'success') {
      this.icon = <SuccessIcon />;
    } else this.icon = '';
  };

  render() {
    return (
      <NotificationWrapper type={this.props.type}>
        {this.icon}
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

