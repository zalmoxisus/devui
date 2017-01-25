import React, { Component, PropTypes } from 'react';
import { getStyles } from '../themes';
import { style } from './styles/index';

const ContextMenuWrapper = getStyles(style, 'div', false);

export default class ContextMenu extends Component {
  constructor(props) {
    super(props);
    this.left = this.props.x;
    this.top = this.props.y;
    this.updateItems(props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.x !== this.props.x || nextProps.y !== this.props.y) {
      const {scrollTop: scrollX, scrollLeft: scrollY} = document.documentElement;
      const { innerWidth, innerHeight } = window;
      const rect = this.menu.getBoundingClientRect();
      this.left = nextProps.x + scrollX;
      this.top = nextProps.y + scrollY;

      if (nextProps.y + rect.height > innerHeight) {
        this.top = innerHeight - rect.height;
      }

      if (nextProps.x + rect.width > innerWidth) {
        this.left = innerWidth - rect.width;
      }

      if (this.props.top < 0) {
        this.top = (rect.height < innerHeight) ? (innerHeight - rect.height) / 2 : 0;
      }

      if (this.props.left < 0) {
        this.left = (rect.width < innerWidth) ? (innerWidth - rect.width) / 2 : 0;
      }
    }
  }

  onMouseUp = e => {
    e.target.blur();
  };

  onClick = (e) => {
    this.props.onClick(e.target.value);
  };

  updateItems(props) {
    const items = props.items;

    this.items = items.map(item => {
      return (
        <button
          key={item.name}
          onMouseUp={this.onMouseUp}
          onClick={this.onClick}
          value={item.name}
        >
          {item.name}
        </button>
      );
    });
  }

  menuRef = (c) => {
    this.menu = c;
  };

  render() {
    return (
      <ContextMenuWrapper
        innerRef={this.menuRef}
        left={this.left}
        top={this.top}
      >
        {this.items}
      </ContextMenuWrapper>
    );
  }
}

ContextMenu.propTypes = {
  items: PropTypes.array.isRequired,
  selected: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
};
