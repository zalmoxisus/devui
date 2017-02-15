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
      clientWidth: 0
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
  }

  enableResizeDetector() {
    this.elementResizeDetector = elementResizeDetectorMaker({ strategy: 'scroll' });
    this.elementResizeDetector.listenTo(this.header.tabsWrapper, this.onResize);
    this.onResize();
  }
  disableResizeDetector() {
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
        parentWidth={this.state.clientWidth}
        collapsible={this.props.collapsible}
        onClick={this.props.onClick}
        align={this.props.align}
      />
    );

    if (!this.SelectedComponent) return tabsHeader;

    return (
      <TabsContainer>
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
