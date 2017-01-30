import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import elementResizeDetectorMaker from 'element-resize-detector';
import TabsHeader from './TabsHeader';
import { TabsContainer } from './styles/common';

export default class Tabs extends Component {
  static getDomNodeDimensions(node) {
    const { top, right, bottom, left, width, height } = node.getBoundingClientRect();
    return { top, right, bottom, left, width, height }
  }
  constructor(props) {
    super(props);
    this.updateTabs(props);
    this.onResize = this.onResize.bind(this)
  }

  componentDidMount() {
    this.enableResizeDetector();
  }

  componentWillUnmount() {
    this.disableResizeDetector();
  }

  enableResizeDetector() {
    this.parentNode = ReactDOM.findDOMNode(this).parentNode;
    this.elementResizeDetector = elementResizeDetectorMaker({ strategy: 'scroll' });
    this.elementResizeDetector.listenTo(this.parentNode, this.onResize);
    this.onResize();
  }
  disableResizeDetector() {
    this.elementResizeDetector.removeListener(this.parentNode, this.onResize)
  }
  onResize() {
    const clientRect = Tabs.getDomNodeDimensions(this.parentNode);
    this.setState({
      initiated: true,
      ...clientRect
    })
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

  render() {
    const tabsHeader = (
      <TabsHeader tabs={this.tabsHeader} main={this.props.main} />
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
