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
      visibleTabs: [],
      hiddenTabs: [],
      subMenuOpened: false
    };
    this.left = 0;
    this.top = 0;
    this.collapsed = [];
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.tabs !== this.props.tabs) {
      this.setState({ visibleTabs: nextProps.tabs.slice() });
    }
  }

  componentWillMount() {
    this.setState({ visibleTabs: this.props.tabs.slice() });
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
    const visibleTabs = this.state.visibleTabs;
    const tabsWrapperRight = tabsWrapperRef.getBoundingClientRect().right;
    const tabsRefRight = tabsRef.getBoundingClientRect().right;
    let i = visibleTabs.length - 1;
    let expandIconWidth = 0;
    if (this.state.visibleTabs.length < this.props.items.length) {
      expandIconWidth = tabButtons[tabButtons.length - 1].getBoundingClientRect().width;
    }

    if (tabsRefRight >= tabsWrapperRight + expandIconWidth) {
      while (i > 0 && tabButtons[i] &&
        tabButtons[i].getBoundingClientRect().right >= tabsWrapperRight) {
        this.collapsed.unshift(visibleTabs.pop());
        i--;
      }
    } else {
      while (i < tabs.length - 1 && tabButtons[i] &&
        tabButtons[i].getBoundingClientRect().right < tabsWrapperRight) {
        visibleTabs.push(this.collapsed.shift());
        i++;
      }
    }
    this.setState({ visibleTabs });
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
    const hiddenTabs = [];
    for (let i = this.state.visibleTabs.length; i < this.props.items.length; i++) {
      hiddenTabs.push(this.props.items[i]);
    }
    this.setState({ hiddenTabs });
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
          {this.state.visibleTabs}
          { this.props.collapsible &&
            this.state.visibleTabs.length < this.props.items.length &&
            <button onClick={this.expandMenu}><CollapseIcon /></button>
          }
        </div>
        {this.props.collapsible &&
          <ContextMenu
            items={this.state.hiddenTabs}
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
