import React, { Component, PropTypes } from 'react';
import CollapseIcon from 'react-icons/lib/fa/angle-double-right';
import ContextMenu from '../ContextMenu';
import getStyles from '../utils/getStyles';
import * as styles from './styles';

const TabsWrapper = getStyles(styles, 'div', true);

export default class TabsHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: [],
      subMenuOpened: false
    };
    this.left = 0;
    this.top = 0;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selected !== this.props.selected) {
      this.collapse(undefined, nextProps.selected);
    }
  }

  componentDidMount() {
    if (this.props.collapsible) {
      this.collapse();
      this.amendCollapsible();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.collapsible !== this.props.collapsible) {
      this.amendCollapsible();
    }
  }

  amendCollapsible() {
    if (this.props.collapsible) {
      this.collapse();
      window.addEventListener('mousedown', this.hideSubmenu);
      window.addEventListener('resize', this.collapse);
    } else {
      window.removeEventListener('resize', this.collapse);
      window.removeEventListener('mousedown', this.hideSubmenu);
    }
  }

  collapse = (el, selected = this.props.selected) => {
    if (this.state.subMenuOpened) this.setState({ subMenuOpened: false });
    const tabs = this.props.items;
    const tabsWrapperRef = this.tabsWrapperRef;
    const tabsRef = this.tabsRef;
    const tabButtons = this.tabsRef.children;
    let arr = [];
    let i;
    if (tabsRef.offsetWidth >= tabsWrapperRef.offsetWidth) { // hide tabs
      i = tabs.length - 1;
      while (tabsRef.offsetWidth >= tabsWrapperRef.offsetWidth) {
        if (i < 0 || arr.length === tabs.length - 1) return;
        if (tabButtons[i].value !== selected) {
          arr.unshift(tabs[i]);
          tabButtons[i].style.display = 'none';
        } else {
          tabButtons[i].style.display = 'block';
        }
        tabButtons[i - 1].style.display = 'block';
        i--;
      }

      this.setState({ collapsed: arr });
    } else { // show tabs
      arr = this.state.collapsed;
      i = 0;

      while (tabsRef.offsetWidth < tabsWrapperRef.offsetWidth) {
        if (i > tabs.length - 1) return;
        if (tabButtons[i].style.display === 'none') {
          tabButtons[i].style.display = 'block';
          arr.shift();
          this.setState({ collapsed: arr.length > 0 ? arr : [] });
        }
        i++;
      }
      if (tabsRef.offsetWidth > tabsWrapperRef.offsetWidth) {
        this.collapse(el, selected);
      }
    }
  };

  hideSubmenu = () => {
   this.setState({ subMenuOpened: false });
  };

  showSubmenu = () => {
    this.setState({ subMenuOpened: true });
  };

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
    this.showSubmenu();
  };

  render() {
    return (
      <TabsWrapper
        innerRef={this.getTabsWrapperRef}
        main={this.props.main}
        position={this.props.position}
      >
        <div ref={this.getTabsRef}>
          {this.props.tabs}
          { this.props.collapsible && this.state.collapsed.length > 0 &&
            <button onClick={this.expandMenu}><CollapseIcon /></button>
          }
        </div>
        {this.props.collapsible &&
          <ContextMenu
            items={this.state.collapsed}
            onClick={this.props.onClick}
            x={this.left}
            y={this.top}
            visible={this.state.subMenuOpened}
          />
        }
      </TabsWrapper>
    );
  }
}

TabsHeader.propTypes = {
  tabs: PropTypes.array.isRequired,
  items: PropTypes.array.isRequired,
  main: PropTypes.bool,
  onClick: PropTypes.func,
  position: PropTypes.string,
  collapsible: PropTypes.bool,
  selected: PropTypes.string
};

TabsHeader.defaultProps = { position: 'left' };
