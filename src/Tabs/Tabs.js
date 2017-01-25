import React, { Component, PropTypes } from 'react';
import TabsHeader from './TabsHeader';
import { TabsContainer } from './styles/common';

export default class Tabs extends Component {
  constructor(props) {
    super(props);
    this.updateTabs(props);
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
    const selected = props.selected || tabs[0].name;

    this.tabsHeader = tabs.map(tab => {
      let isSelected;
      if (tab.name === selected) {
        isSelected = true;
        this.SelectedComponent = tab.component;
        if (tab.selector) this.selector = () => tab.selector(tab);
      }
      return (
        <button
          key={tab.name}
          data-selected={isSelected}
          onMouseUp={this.onMouseUp}
          onClick={this.onClick}
          value={tab.name}
        >
          {tab.name}
        </button>
      );
    });
  }

  render() {
    return (
      <TabsContainer>
        <TabsHeader tabs={this.tabsHeader} />
        <div>{this.SelectedComponent && <this.SelectedComponent {...this.selector()} />}</div>
      </TabsContainer>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  selected: PropTypes.string,
  onClick: PropTypes.func.isRequired
};
