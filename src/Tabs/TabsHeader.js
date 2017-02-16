import React, { Component, PropTypes } from 'react';
import CollapseIcon from 'react-icons/lib/fa/angle-double-right';
import ContextMenu from '../ContextMenu';
import getStyles from '../utils/getStyles';
import * as styles from './styles';

const TabsWrapper = getStyles(styles, 'div', true);

export default class TabsHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
    this.left = 0;
    this.top = 0;
  }

  componentDidMount() {
    if (this.props.collapsible) {
      this.amendCollapsible();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.tabs !== this.props.tabs ||
      nextProps.main !== this.props.main ||
      nextProps.align !== this.props.align ||
      nextProps.collapsed !== this.props.collapsed ||
      nextState.isVisible !== this.state.isVisible
  }

  componentDidUpdate(prevProps) {
    if (prevProps.collapsible !== this.props.collapsible) {
      this.amendCollapsible();
    }
    if (prevProps.collapsed !== this.props.collapsed) {
      this.hideSubmenu();
    }
  }

  amendCollapsible() {
    if (this.props.collapsible) {
      window.addEventListener('mousedown', this.hideSubmenu);
    } else {
      window.removeEventListener('mousedown', this.hideSubmenu);
    }
  }

  hideSubmenu = () => {
    this.setState({isVisible: false});
  };

  expandMenu = (e) => {
    const rect = e.currentTarget.children[0].getBoundingClientRect();
    this.left = rect.left - 10;
    this.top = rect.top + 10;
    this.setState({isVisible: true});
  };

  getRef = name => node => {
    this[name] = node;
  };

  render() {
    return (
      <TabsWrapper
        innerRef={this.getRef('tabsWrapper')}
        main={this.props.main}
        align={this.props.align}
      >
        <div ref={this.getRef('menu')}>
          {this.props.tabs}
          { this.props.collapsed.length > 0 &&
            <button onClick={this.expandMenu}><CollapseIcon /></button>
          }
        </div>
        { this.state.isVisible &&
          this.props.collapsed.length > 0 &&
            <ContextMenu
              className="contextMenu"
              ref={this.getRef('submenu')}
              items={this.props.collapsed}
              onClick={this.props.onClick}
              x={this.left}
              y={this.top}
            />
        }
      </TabsWrapper>
    );
  }
}

TabsHeader.propTypes = {
  tabs: PropTypes.array.isRequired,
  main: PropTypes.bool,
  collapsible: PropTypes.bool,
  onClick: PropTypes.func,
  align: PropTypes.string,
  collapsed: PropTypes.array
};
