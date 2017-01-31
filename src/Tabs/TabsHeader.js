import React, { Component, PropTypes } from 'react';
import MdNavigateNext from 'react-icons/lib/md/navigate-next';
import getStyles from '../utils/getStyles';
import ReactDOM from 'react-dom';
import * as styles from './styles';

const TabsWrapper = getStyles(styles, 'div', true);

export default class TabsHeader extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.tabs !== this.props.tabs || nextProps.main !== this.props.main || nextProps.width !== this.props.width;
  }

  render() {
    return (
      <TabsWrapper main={this.props.main} width={this.props.width}>
        <div>
          {this.props.tabs}
          <MdNavigateNext/>
        </div>
      </TabsWrapper>
    );
  }
}

TabsHeader.propTypes = { tabs: PropTypes.array.isRequired, main: PropTypes.bool, clientRect: PropTypes.object };
