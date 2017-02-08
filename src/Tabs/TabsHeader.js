import React, { Component, PropTypes } from 'react';
import MdNavigateNext from 'react-icons/lib/md/navigate-next';
import getStyles from '../utils/getStyles';
import * as styles from './styles';

const TabsWrapper = getStyles(styles, 'div', true);

export default class TabsHeader extends Component {
  constructor(props) {
    super(props);
    this.collapsed = []
  }

  componentDidMount() {
    setTimeout(() => { this.autocollapse(); }, 0);
    this.amendCollapsable();
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.tabs !== this.props.tabs ||
      nextProps.main !== this.props.main ||
      nextProps.width !== this.props.width ||
      nextProps.collapsable !== this.props.collapsable
  }

  componentDidUpdate(prevProps) {
    if (prevProps.collapsable !== this.props.collapsable) {
      this.amendCollapsable();
    }
    if (prevProps.selected !== this.props.selected && this.props.main) {
      this.autocollapse();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.autocollapse);
  }

  amendCollapsable() {
    if (this.props.collapsable) {
      window.addEventListener('mousedown', this.pageClick);
      setTimeout(() => {
        this.autocollapse();
        let resizeId;
        window.addEventListener('resize', this.autocollapse);
      }, 0);
    } else {
      window.removeEventListener('resize', this.autocollapse);
      window.removeEventListener('mousedown', this.pageClick);
    }
  }

  pageClick = () => {
    if (this.submenu) this.submenu.style.display = 'none';
  };

  autocollapse = () => {
    let arr = [];
    if (this.menu.offsetWidth > this.props.width - 50) {
      let i = this.props.tabs.length - 1;
      while (this.menu.offsetWidth > this.props.width - 50) {
        arr.push(this.props.tabs[i]);
        this.menu.children[i].className = 'collapsed';
        i--;
      }
      this.collapsed = arr;
    } else {
      arr = this.collapsed;
      let i = arr.length - 1;
      while (this.menu.offsetWidth < this.props.width - 50) {
        if (i < 0) return;
        this.menu.children[this.props.tabs.length - 1 - i].className = '';
        arr.pop();
        this.collapsed = arr;
        i--;
      }
      if (this.menu.offsetWidth > this.props.width - 50) {
        this.autocollapse();
      }
    }
    this.forceUpdate();
  };
  expandMenu = (e) => {
    const rect = e.target.getBoundingClientRect();
    this.submenu.style.top = `${rect.top + 20}px`;
    this.submenu.style.display = this.submenu.style.display === 'block' ?
        'none' : 'block';
  };
  menuRef = (c) => {
    this.menu = c;
  };
  submenuRef = (c) => {
    this.submenu = c;
  };

  render() {
    return (
      <TabsWrapper main={this.props.main} width={this.props.width}>
        <div ref={this.menuRef} >
          {this.props.tabs}
          { (this.collapsed.length > 0) &&
            <button onClick={this.expandMenu}><MdNavigateNext /></button>
          }
        </div>
        <div ref={this.submenuRef}>
          {this.collapsed}
        </div>
      </TabsWrapper>
    );
  }
}

TabsHeader.propTypes = {
  tabs: PropTypes.array.isRequired,
  main: PropTypes.bool,
  width: PropTypes.number,
  collapsable: PropTypes.bool,
  selected: PropTypes.string
};
