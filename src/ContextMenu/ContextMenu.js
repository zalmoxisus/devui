import React, { Component, PropTypes } from 'react';
import { getStyles } from '../themes';
import { cssClasses } from './utils/helpers';

export default class ContextMenu extends Component {
  constructor(props) {
    super(props);
    this.updateItems(props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.items !== this.props.items || nextProps.selected !== this.props.selected) {
      this.updateItems(nextProps);
    }
  }

  onMouseUp = e => {
    e.target.blur();
  };

  onClick = (e) => {
    this.props.onClick(e.target.value);
    this.props.hide();
  };

  updateItems(props) {
    const items = props.items;
    const selected = props.selected || items[0].name;

    this.items = items.map(item => {
      let isSelected;
      if (item.name === selected) {
        isSelected = true;
        this.SelectedComponent = item.component;
        if (item.selector) this.selector = () => item.selector(item);
      }
      return (
        <button
          key={item.name}
          onMouseUp={this.onMouseUp}
          onClick={this.onClick}
          data-selected={isSelected}
          value={item.name}
          className={cssClasses.menuItem}
        >
          {item.name}
        </button>
      );
    });
  }

  render() {
    return (
      <div>
        {this.items}
      </div>
    );
  }
}

ContextMenu.propTypes = {
  items: PropTypes.array.isRequired,
  selected: PropTypes.string,
  hide: PropTypes.func,
  onClick: PropTypes.func.isRequired
};
