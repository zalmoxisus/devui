import React, { Component, PropTypes } from 'react';
import TabsHeader from './TabsHeader';
import { TabsContainer } from './styles';

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

  onClick = (e) => {
    this.props.onClick(e.target.innerText);
  };

  updateTabs(props) {
    const tabs = props.tabs;
    const selected = props.selected || tabs[0].name;

    this.tabsHeader = tabs.map(tab => {
      let isSelected;
      if (tab.name === selected) {
        isSelected = true;
        this.SelectedComponent = tab.component;
        if (tab.selector) this.selector = tab.selector(tab);
      }
      return (
        <button
          key={tab.name}
          data-selected={isSelected}
          onClick={this.onClick}
        >
          {tab.name}
        </button>
      );
    });
  }

  render() {
    return (
      <TabsContainer compact={this.props.compact}>
        <TabsHeader tabs={this.tabsHeader} buttons={this.props.buttons} />
        <div>{
          this.SelectedComponent && <this.SelectedComponent {...this.selector} />
        }</div>
      </TabsContainer>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  selected: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  buttons: PropTypes.array,
  compact: PropTypes.bool
};
