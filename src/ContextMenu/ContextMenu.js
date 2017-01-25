import React, { Component, PropTypes } from 'react';
import { getStyles } from '../themes';
import { style } from './styles/index';

const Container = getStyles(style, 'div', false);

export default class ContextMenu extends Component {
  constructor(props) {
    super(props);
    this.updateItems(props);
  }

  componentDidUpdate() {
    const {x,y} = this.props;
    const {top, left} = this.getMenuPosition(x, y);
    this.menu.style.top = `${top}px`;
    this.menu.style.left = `${left}px`;
  };

  getMenuPosition = (x, y) => {
    const {scrollTop: scrollX, scrollLeft: scrollY} = document.documentElement;
    const { innerWidth, innerHeight } = window;
    const rect = this.menu.getBoundingClientRect();
    const menuStyles = {
      top: y + scrollY,
      left: x + scrollX
    };

    if (y + rect.height > innerHeight) {
      menuStyles.top = innerHeight - rect.height;
    }

    if (x + rect.width > innerWidth) {
      menuStyles.left = innerWidth - rect.width;
    }

    if (menuStyles.top < 0) {
      menuStyles.top = (rect.height < innerHeight) ? (innerHeight - rect.height) / 2 : 0;
    }

    if (menuStyles.left < 0) {
      menuStyles.left = (rect.width < innerWidth) ? (innerWidth - rect.width) / 2 : 0;
    }

    return menuStyles;
  };

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
    const style = {position: 'fixed', top: this.props.y, left: this.props.x};
    return (
      <div
        ref={this.menuRef}
        style={style}
      >
        <Container>{this.items}</Container>
      </div>
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
