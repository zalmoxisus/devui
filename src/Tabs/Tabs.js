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
    if (!this.props.collapsable) {
      return;
    }
    const clientRect = Tabs.getDomNodeDimensions(this.container);
    this.setState({
      clientWidth: clientRect.width
    });
  }

  enableResizeDetector() {
    this.parentNode = ReactDOM.findDOMNode(this).parentNode;
    this.elementResizeDetector = elementResizeDetectorMaker({ strategy: 'scroll' });
    this.elementResizeDetector.listenTo(this.parentNode, this.onResize);
    this.onResize();
  }
  disableResizeDetector() {
    this.elementResizeDetector.removeListener(this.parentNode, this.onResize);
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

  containerRef = (c) => {
    this.container = c;
  };

  render() {
    const tabsHeader = (
      <TabsHeader
        tabs={this.tabsHeader}
        main={this.props.main}
        selected={this.props.selected}
        parentWidth={this.state.clientWidth}
        collapsable={this.props.collapsable}
        onClick={this.props.onClick}
      />
    );

    return (
      <TabsContainer innerRef={this.containerRef}>
        {tabsHeader}
        { this.SelectedComponent &&
          <div>
            <this.SelectedComponent {...this.selector()} />
          </div>
        }
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
