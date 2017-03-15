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
    this.setState({visibleTabs: this.props.tabs});
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

  updatedTab = (tab, isSelected = null) => {
    return (
      <button
        key={tab.value}
        value={tab.value}
        onClick={this.props.onClick}
        data-selected={isSelected}
      >
        {tab.name}
      </button>
    );
  };

  collapse = (el, selected = this.props.selected) => {
    if (this.state.subMenuOpened) this.setState({ subMenuOpened: false });
    const tabs = this.props.items;
    const tabsWrapperRef = this.tabsWrapperRef;
    const tabsRef = this.tabsRef;
    let visibleTabs = this.state.visibleTabs;
    let i;
    if (tabsRef.offsetWidth >= tabsWrapperRef.offsetWidth) { // hide tabs
      for (i = tabs.length - 1; i > 0; i--) {
        if (tabsRef.offsetWidth < tabsWrapperRef.offsetWidth) return;
        visibleTabs.pop();
        if (tabs[i].value === selected) {
          visibleTabs.push(this.updatedTab(tabs[i], true));
        }

        this.setState({ visibleTabs: visibleTabs });
      }
    } else { // show tabs
      for (i = visibleTabs.length; i < tabs.length; i++) {
        visibleTabs.push(this.updatedTab(tabs[i], null));
        this.setState({ visibleTabs: visibleTabs });
        if (tabsRef.offsetWidth > tabsWrapperRef.offsetWidth) {
          this.collapse(el, selected);
          return;
        }
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
    let hiddenTabs = [];
    for (let i = this.state.visibleTabs.length; i < this.props.items.length; i++) {
      hiddenTabs.push(this.props.items[i]);
    }
    this.setState({ hiddenTabs: hiddenTabs });
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
