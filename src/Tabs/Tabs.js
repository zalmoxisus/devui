import React, { Component, PropTypes } from 'react';
import elementResizeDetectorMaker from 'element-resize-detector';
import TabsHeader from './TabsHeader';
import { TabsContainer } from './styles/common';

export default class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: [],
      subMenuOpened: false
    };
    this.updateTabs(props);
  }

  componentDidMount() {
    if (this.props.collapsible) this.enableResizeDetector();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selected !== this.props.selected) {
      this.updateTabs(nextProps);
      if (this.elementResizeDetector) this.collapse(undefined, nextProps.selected);
    }
  }

  componentWillUnmount() {
    if (this.elementResizeDetector) this.disableResizeDetector();
  }

  onMouseUp = e => {
    e.target.blur();
  };

  onClick = e => {
    this.props.onClick(e.target.value);
  };

  collapse = (el, selected = this.props.selected) => {
    if (this.state.subMenuOpened) this.setState({ subMenuOpened: false });

    const tabs = this.props.tabs;
    const tabsWrapperRef = this.headerRef.tabsWrapperRef;
    const tabsRef = this.headerRef.tabsRef;
    const tabButtons = this.headerRef.tabsRef.children;
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

  enableResizeDetector() {
    window.addEventListener('mousedown', this.hideSubmenu);
    this.elementResizeDetector = elementResizeDetectorMaker({ strategy: 'scroll' });
    this.elementResizeDetector.listenTo(this.headerRef.tabsWrapperRef, this.collapse);
    this.collapse();
  }

  disableResizeDetector() {
    window.removeEventListener('mousedown', this.hideSubmenu);
    // this.elementResizeDetector.removeListener(this.headerRef.tabsWrapperRef, this.collapse);
    this.elementResizeDetector.uninstall(this.headerRef.tabsWrapperRef);
  }

  updateTabs(props) {
    const tabs = props.tabs;
    const selected = props.selected;

    this.tabsHeader = tabs.map(tab => {
      let isSelected;
      const value = typeof tab.value !== 'undefined' ? tab.value : tab.name;
      if (value === selected) {
        isSelected = true;
        if (tab.component) {
          this.SelectedComponent = tab.component;
          if (tab.selector) this.selector = () => tab.selector(tab);
        }
      }
      return (
        <button
          key={value}
          value={value}
          data-selected={isSelected}
          onMouseUp={this.onMouseUp}
          onClick={this.onClick}
        >
          {tab.name}
        </button>
      );
    });
  }

  hideSubmenu = () => {
    this.setState({ subMenuOpened: false });
  };

  showSubmenu = () => {
    this.setState({ subMenuOpened: true });
  };

  getHeaderRef = node => {
    this.headerRef = node;
  };

  render() {
    const tabsHeader = (
      <TabsHeader
        ref={this.getHeaderRef}
        tabs={this.tabsHeader}
        main={this.props.main}
        collapsible={this.props.collapsible}
        onClick={this.props.onClick}
        collapsed={this.state.collapsed}
        subMenuOpened={this.state.subMenuOpened}
        showSubmenu={this.showSubmenu}
      />
    );

    if (!this.SelectedComponent) return tabsHeader;

    return (
      <TabsContainer position={this.props.position}>
        {tabsHeader}
        <div><this.SelectedComponent {...this.selector()} /></div>
      </TabsContainer>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  selected: PropTypes.string,
  main: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  collapsible: PropTypes.bool,
  position: PropTypes.oneOf(['left', 'right', 'center'])
};
