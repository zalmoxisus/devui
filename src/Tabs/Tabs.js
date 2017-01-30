import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import elementResizeDetectorMaker from 'element-resize-detector';
import TabsHeader from './TabsHeader';
import { TabsContainer } from './styles/common';

export default class Tabs extends Component {
  constructor(props) {
    super(props);
    this.updateTabs(props);
  }

  componentDidMount() {
    this.enableResizeDetector();
  }

  componentWillUnmount() {
    this.disableResizeDetector();
  }

  enableResizeDetector() {
    this.erd = elementResizeDetectorMaker();

    var erdUltraFast = elementResizeDetectorMaker({
      strategy: "scroll"
    });

    this.erd.listenTo(ReactDOM.findDOMNode(this.tabs), function(element) {
      var width = element.offsetWidth;
      var height = element.offsetHeight;
      console.log("Size: " + width + "x" + height);
    });
  }
  disableResizeDetector() {
    this.erd.removeListener(ReactDOM.findDOMNode(this.tabs));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.tabs !== this.props.tabs || nextProps.selected !== this.props.selected) {
      this.updateTabs(nextProps);
    }
  }

  onMouseUp = e => {
    e.target.blur();
  };

  onClick = e => {
    this.props.onClick(e.target.value);
  };

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

  tabsRef = (c) => {
    this.tabs = c;
  };

  render() {
    const tabsHeader = (
      <TabsHeader ref={this.tabsRef} tabs={this.tabsHeader} main={this.props.main} />
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
  collapsable: PropTypes.bool
};
