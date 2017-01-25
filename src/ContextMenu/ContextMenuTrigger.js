import React, { Component, PropTypes } from 'react';
import { getStyles } from '../themes';
import { style } from './styles/index';
import ContextMenu from './ContextMenu';

const Container = getStyles(style, 'div', false);

import listener from './utils/globalEventListener';
import { showMenu, hideMenu } from './utils/actions';
import { cssClasses, callIfExists } from './utils/helpers';

export default class ContextMenuTrigger extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
      isVisible: false
    };
  }

  componentDidMount() {
    this.listenId = listener.register(this.handleShow, this.handleHide);
  }

  componentDidUpdate() {
    if (this.state.isVisible) {
      const wrapper = window.requestAnimationFrame || setTimeout;

      wrapper(() => {
        const {x, y} = this.state;

        const {top, left} = this.getMenuPosition(x, y);

        wrapper(() => {
          this.menu.style.top = `${top}px`;
          this.menu.style.left = `${left}px`;
          this.menu.style.opacity = 1;
          this.menu.style.pointerEvents = 'auto';
          this.menu.classList.add(cssClasses.menuVisible);
        });
      });
    } else {
      this.menu.style.opacity = 0;
      this.menu.style.pointerEvents = 'none';
      this.menu.classList.remove(cssClasses.menuVisible);
    }
  }

  componentWillUnmount() {
    if (this.listenId) {
      listener.unregister(this.listenId);
    }
    this.unregisterHandlers();
  }

  registerHandlers = () => {
    document.addEventListener('mousedown', this.handleOutsideClick);
    document.addEventListener('ontouchstart', this.handleOutsideClick);
    document.addEventListener('scroll', this.handleHide);
    document.addEventListener('contextmenu', this.handleHide);
    window.addEventListener('resize', this.handleHide);
  };

  unregisterHandlers = () => {
    document.removeEventListener('mousedown', this.handleOutsideClick);
    document.removeEventListener('ontouchstart', this.handleOutsideClick);
    document.removeEventListener('scroll', this.handleHide);
    document.removeEventListener('contextmenu', this.handleHide);
    window.removeEventListener('resize', this.handleHide);
  };

  handleShow = (e) => {
    const { x, y } = e.detail.position;

    this.setState({isVisible: true, x, y});
    this.registerHandlers();
  };

  handleHide = (e) => {
    this.unregisterHandlers();
    this.setState({isVisible: false});
  };

  handleOutsideClick = (e) => {
    if (!this.menu.contains(e.target)) hideMenu();
  };

  getMenuPosition = (x, y) => {
    const {scrollTop: scrollX, scrollLeft: scrollY} = document.documentElement;
    const { innerWidth, innerHeight } = window;
    const rect = {height: 100, width: 100}; //this.menu.getBoundingClientRect();
    const menuStyles = {
      top: y + scrollY,
      left: x + scrollX
    };

    if (y + rect.height > innerHeight) {
      menuStyles.top -= rect.height;
    }

    if (x + rect.width > innerWidth) {
      menuStyles.left -= rect.width;
    }

    if (menuStyles.top < 0) {
      menuStyles.top = (rect.height < innerHeight) ? (innerHeight - rect.height) / 2 : 0;
    }

    if (menuStyles.left < 0) {
      menuStyles.left = (rect.width < innerWidth) ? (innerWidth - rect.width) / 2 : 0;
    }

    return menuStyles;
  };

  menuRef = (c) => {
    this.menu = c;
  };

  handleContextClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const x = event.clientX || (event.touches && event.touches[0].pageX);
    const y = event.clientY || (event.touches && event.touches[0].pageY);

    hideMenu();

    showMenu({
      position: {x, y},
      target: this.elem,
      data: callIfExists(this.props.collect, this.props)
    });
  };

  render() {
    const { top, left } = this.state;
    const style = {position: 'fixed', top, left, opacity: 0, pointerEvents: 'none'};
    return (
      <Container>
        <div
          onContextMenu={ this.props.rightClick ? this.handleContextClick : null}
          onClick={ this.props.leftClick ? this.handleContextClick : null}
        >
          {this.props.children}
        </div>
        <div
          ref={this.menuRef} style={style}
          onContextMenu={this.handleHide}
        >
          {<ContextMenu
            items={this.props.items}
            onClick={this.props.onClick}
            hide={this.handleHide}
          />}
        </div>
      </Container>
    );
  }
}

ContextMenuTrigger.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string,
  onClick: PropTypes.func,
  leftClick: PropTypes.bool,
  rightClick: PropTypes.bool,
  items: PropTypes.array
};
