import React, { Component, PropTypes } from 'react';
import CollapseIcon from 'react-icons/lib/fa/angle-double-right';
import ContextMenu from '../ContextMenu';
import getStyles from '../utils/getStyles';
import * as styles from './styles';

const TabsWrapper = getStyles(styles, 'div', true);

export default class TabsHeader extends Component {
  constructor(props) {
    super(props);
    this.collapsed = [];
    this.left = 0;
    this.top = 0;
  }

  componentDidMount() {
    if (this.props.collapsable) {
      setTimeout(() => { this.autocollapse(); }, 0);
      this.amendCollapsable();
    }
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.tabs !== this.props.tabs ||
      nextProps.main !== this.props.main ||
      nextProps.parentWidth !== this.props.parentWidth;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.collapsable !== this.props.collapsable) {
      this.amendCollapsable();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.autocollapse);
  }

  amendCollapsable() {
    if (this.props.collapsable) {
      setTimeout(() => { this.autocollapse(); }, 0);
      window.addEventListener('mousedown', this.pageClick);
      window.addEventListener('resize', this.autocollapse);
    } else {
      window.removeEventListener('resize', this.autocollapse);
      window.removeEventListener('mousedown', this.pageClick);
    }
  }

  pageClick = () => {
    this.submenu.items = [];
    this.forceUpdate();
  };

  autocollapse = () => {
    let arr = [];
    if (this.menu.offsetWidth >= this.props.parentWidth) {
      let i = this.props.tabs.length - 1;
      while (this.menu.offsetWidth >= this.props.parentWidth) {
        if (i < 0) return;
        arr.push(this.props.tabs[i]);
        this.menu.children[i].className = 'collapsed';
        i--;
      }
      this.collapsed = arr;
      this.forceUpdate();
    } else {
      arr = this.collapsed;
      let i = arr.length - 1;
      while (this.menu.offsetWidth < this.props.parentWidth) {
        if (i < 0) return;
        this.menu.children[this.props.tabs.length - 1 - i].className = '';
        arr.pop();
        this.collapsed = arr;
        i--;
        this.forceUpdate();
      }
      if (this.menu.offsetWidth > this.props.parentWidth) {
        this.autocollapse();
      }
    }
  };
  expandMenu = (e) => {
    const rect = e.currentTarget.children[0].getBoundingClientRect();
    this.left = rect.left - 10;
    this.top = rect.top + 10;
    this.submenu.items = this.collapsed;
    this.forceUpdate();
  };
  menuRef = (c) => {
    this.menu = c;
  };
  submenuRef = (c) => {
    this.submenu = c;
  };

  render() {
    return (
      <TabsWrapper main={this.props.main} parentWidth={this.props.parentWidth}>
        <div ref={this.menuRef}>
          {this.props.tabs}
          { (this.collapsed.length > 0) &&
            <button onClick={this.expandMenu}><CollapseIcon /></button>
          }
        </div>
        <ContextMenu
          ref={this.submenuRef}
          items={this.collapsed}
          onClick={this.props.onClick}
          x={this.left}
          y={this.top}
        />
      </TabsWrapper>
    );
  }
}

TabsHeader.propTypes = {
  tabs: PropTypes.array.isRequired,
  main: PropTypes.bool,
  parentWidth: PropTypes.number,
  collapsable: PropTypes.bool,
  selected: PropTypes.string,
  onClick: PropTypes.func
};
