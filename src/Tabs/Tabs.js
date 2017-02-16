import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import elementResizeDetectorMaker from 'element-resize-detector';
import TabsHeader from './TabsHeader';
import { TabsContainer } from './styles/common';

export default class Tabs extends Component {
  static getDomNodeDimensions(node) {
    const { top, right, bottom, left, width, height } = node.getBoundingClientRect();
    return { top, right, bottom, left, width, height };
  }
  constructor(props) {
    super(props);
    this.state = {
      clientWidth: 0,
      collapsed: [],
      isCollapsed: false
    };
    this.updateTabs(props);
    this.onResize = this.onResize.bind(this);
  }

  componentDidMount() {
    this.enableResizeDetector();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.tabs !== this.props.tabs || nextProps.selected !== this.props.selected) {
      this.updateTabs(nextProps);
    }
  }

  componentWillUnmount() {
    this.disableResizeDetector();
  }

  onMouseUp = e => {
    e.target.blur();
  };

  onClick = e => {
    this.props.onClick(e.target.value);
  };

  onResize() {
    if (!this.props.collapsible) {
      return;
    }
    const clientRect = Tabs.getDomNodeDimensions(this.header.tabsWrapper);
    this.setState({
      clientWidth: clientRect.width
    });
    this.autocollapse();
  }

  autocollapse = () => {
    if (this.header) {
      let arr = [];
      if (this.header.menu.offsetWidth >= this.header.tabsWrapper.offsetWidth) {
        let i = this.props.tabs.length - 1;
        while (this.header.menu.offsetWidth >= this.header.tabsWrapper.offsetWidth) {
          if (i < 0) return;
          arr.unshift(this.props.tabs[i]);
          //console.log(arr);
          this.header.menu.children[i].className = 'collapsed';
          i--;
        }
        this.setState({collapsed: arr});
      } else {
        arr = this.state.collapsed;
        let i = arr.length - 1;
        while (this.header.menu.offsetWidth < this.header.tabsWrapper.offsetWidth) {
          if (i < 0) return;
          this.header.menu.children[this.props.tabs.length - 1 - i].className = '';
          arr.shift();
          this.setState({collapsed: arr.length > 0 ? arr : []});
          i--;
        }
        if (this.header.menu.offsetWidth > this.header.tabsWrapper.offsetWidth) {
          this.autocollapse();
        }
      }
    }
  };

  enableResizeDetector() {
    window.addEventListener('mousedown', this.hideSubmenu);
    this.elementResizeDetector = elementResizeDetectorMaker({ strategy: 'scroll' });
    this.elementResizeDetector.listenTo(this.header.tabsWrapper, this.onResize);
    this.onResize();
  }
  disableResizeDetector() {
    window.removeEventListener('mousedown', this.hideSubmenu);
    this.elementResizeDetector.removeListener(this.header.tabsWrapper, this.onResize);
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
    this.setState({isCollapsed: false});
  };

  showSubmenu = () => {
    this.setState({isCollapsed: true});
  };

  headerRef = (c) => {
    this.header = c;
  };

  render() {
    const tabsHeader = (
      <TabsHeader
        ref={this.headerRef}
        tabs={this.tabsHeader}
        main={this.props.main}
        selected={this.props.selected}
        collapsible={this.props.collapsible}
        onClick={this.props.onClick}
        align={this.props.align}
        collapsed={this.state.collapsed}
        isCollapsed={this.state.isCollapsed}
        showSubmenu={this.showSubmenu}
      />
    );

    if (!this.SelectedComponent) return tabsHeader;

    return (
      <TabsContainer>
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
  align: PropTypes.oneOf(['left', 'right', 'center'])
};
