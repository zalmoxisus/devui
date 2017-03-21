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
      visibleTabs: [],
      hiddenTabs: [],
      subMenuOpened: false,
      contextMenu: undefined
    };
    this.left = 0;
    this.top = 0;
    this.collapsed = [];
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.tabs !== this.props.tabs ||
      nextProps.selected !== this.props.selected) {
      this.setState({ hiddenTabs: [] });
      this.addTabs(nextProps.tabs);
      setTimeout(() => {
        this.collapse(undefined, nextProps.selected);
      }, 0);
    }
  }

  componentWillMount() {
    this.addTabs(this.props.tabs);
  }

  componentDidMount() {
    this.collapse();
    if (this.props.collapsible) {
      this.amendCollapsible();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.collapsible !== this.props.collapsible) {
      this.amendCollapsible();
    }
  }

  addTabs(tabs) {
    this.setState({ visibleTabs: tabs.slice() });
  }

  amendCollapsible() {
    if (this.props.collapsible) {
      window.addEventListener('resize', this.collapse);
      window.addEventListener('mousedown', this.hideSubmenu);
    } else {
      window.removeEventListener('resize', this.collapse);
      window.removeEventListener('mousedown', this.hideSubmenu);
    }
  }

  collapse = (el, selected = this.props.selected) => {
    if (this.state.subMenuOpened) this.hideSubmenu();
    const tabs = this.props.items;
    const tabsWrapperRef = this.tabsWrapperRef;
    const tabsRef = this.tabsRef;
    const tabButtons = this.tabsRef.children;
    const visibleTabs = this.state.visibleTabs;
    const hiddenTabs = this.state.hiddenTabs;
    let tabsWrapperRight = tabsWrapperRef.getBoundingClientRect().right -
      tabButtons[tabButtons.length - 1].getBoundingClientRect().width;
    const tabsRefRight = tabsRef.getBoundingClientRect().right;
    let i = visibleTabs.length - 1;

    if (tabsRefRight >= tabsWrapperRight) {
      while (i > 0 && tabButtons[i] &&
        tabButtons[i].getBoundingClientRect().right >= tabsWrapperRight) {
        if (tabButtons[i].value !== selected) {
          hiddenTabs.unshift.apply(hiddenTabs, visibleTabs.splice(i, 1));
        } else {
          tabsWrapperRight -= tabButtons[i].getBoundingClientRect().width;
        }
        i--;
      }
    } else {
      while (i < tabs.length - 1 && tabButtons[i] &&
        tabButtons[i].getBoundingClientRect().right +
        tabButtons[i].getBoundingClientRect().width < tabsWrapperRight) {
        visibleTabs.splice(Number(hiddenTabs[0].key), 0, hiddenTabs.shift());
        i++;
      }
    }
    this.setState({ visibleTabs, hiddenTabs });
  };

  hideSubmenu = () => {
    this.setState({ subMenuOpened: false });
  };

  getTabsWrapperRef = node => {
    this.tabsWrapperRef = node;
  };

  getTabsRef = node => {
    this.tabsRef = node;
  };

  expandMenu = (e) => {
    const rect = e.currentTarget.children[0].getBoundingClientRect();
    this.setState({
      contextMenu: {
        top: rect.top + 10,
        left: rect.left + 10
      },
      subMenuOpened: true
    });
  };

  render() {
    return (
      <TabsWrapper
        innerRef={this.getTabsWrapperRef}
        main={this.props.main}
        position={this.props.position}
      >
        <div ref={this.getTabsRef}>
          {this.state.visibleTabs}
          { this.props.collapsible &&
            this.state.visibleTabs.length < this.props.items.length &&
            <button onClick={this.expandMenu}><CollapseIcon /></button>
          }
        </div>
        {this.props.collapsible && this.state.contextMenu &&
          <ContextMenu
            items={this.state.hiddenTabs}
            onClick={this.props.onClick}
            x={this.state.contextMenu.left}
            y={this.state.contextMenu.top}
            visible={this.state.subMenuOpened}
          />
        }
      </TabsWrapper>
    );
  }
}

TabsHeader.propTypes = {
  tabs: PropTypes.array.isRequired,
  items: PropTypes.array.isRequired,
  main: PropTypes.bool,
  onClick: PropTypes.func,
  position: PropTypes.string,
  collapsible: PropTypes.bool,
  selected: PropTypes.string
};

TabsHeader.defaultProps = { position: 'left' };
