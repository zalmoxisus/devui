import React, { Component, PropTypes } from 'react';
import CollapseIcon from 'react-icons/lib/fa/angle-double-right';
import ContextMenu from '../ContextMenu';
import getStyles from '../utils/getStyles';
import * as styles from './styles';

const TabsWrapper = getStyles(styles, 'div', true);

export default class TabsHeader extends Component {
  constructor(props) {
    super(props);
    this.left = 0;
    this.top = 0;
  }

  getTabsWrapperRef = node => {
    this.tabsWrapperRef = node;
  };

  getTabsRef = node => {
    this.tabsRef = node;
  };

  expandMenu = (e) => {
    const rect = e.currentTarget.children[0].getBoundingClientRect();
    this.left = rect.left - 10;
    this.top = rect.top + 10;
    this.props.showSubmenu();
  };

  render() {
    return (
      <TabsWrapper
        innerRef={this.getTabsWrapperRef}
        main={this.props.main}
        align={this.props.align}
      >
        <div ref={this.getTabsRef}>
          {this.props.tabs}
          { this.props.collapsible && this.props.collapsed.length > 0 &&
            <button onClick={this.expandMenu}><CollapseIcon /></button>
          }
        </div>
        {this.props.collapsible &&
          <ContextMenu
            items={this.props.collapsed}
            onClick={this.props.onClick}
            x={this.left}
            y={this.top}
            visible={this.props.subMenuOpened}
          />
        }
      </TabsWrapper>
    );
  }
}

TabsHeader.propTypes = {
  tabs: PropTypes.array.isRequired,
  main: PropTypes.bool,
  onClick: PropTypes.func,
  align: PropTypes.string,
  collapsible: PropTypes.bool,
  collapsed: PropTypes.array,
  subMenuOpened: PropTypes.bool,
  showSubmenu: PropTypes.func
};
