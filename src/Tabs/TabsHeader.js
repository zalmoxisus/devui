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
    this.iconWidth = 0;
    this.nextTab = [];
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.tabs !== this.props.tabs ||
      nextProps.selected !== this.props.selected ||
      nextProps.collapsible !== this.props.collapsible) {
      this.setState({ hiddenTabs: [] });
      this.addTabs(nextProps.tabs);
    }
  }

  componentWillMount() {
    this.addTabs(this.props.tabs);
  }

  componentDidMount() {
    this.amendCollapsible(this.props.collapsible);
    if (this.props.collapsible) {
      this.collapse();
    }
  }

  componentDidUpdate(prevProps) {
    if(this.props.selected !== prevProps.selected) {
      if (this.props.collapsible) {
        this.collapse(undefined, this.props.selected);
      }
    }
    if (prevProps.collapsible !== this.props.collapsible) {
      this.amendCollapsible(this.props.collapsible);
    }
    if (this.iconWidth === 0) {
      const tabButtons = this.tabsRef.children;
      if (this.tabsRef.children[tabButtons.length - 1].value === 'expandIcon') {
        this.iconWidth = tabButtons[tabButtons.length - 1].getBoundingClientRect().width;
        this.collapse();
      }
    } else if (this.state.hiddenTabs.length === 0) {
      this.iconWidth = 0;
    }
  }

  componentWillUnmount() {
    this.disableResizeEvents();
  }

  addTabs(tabs) {
    this.setState({ visibleTabs: tabs.slice() });
  }

  disableResizeEvents() {
    window.removeEventListener('resize', this.collapse);
    window.removeEventListener('mousedown', this.hideSubmenu);
  }

  amendCollapsible(collapsible) {
    if (collapsible) {
      this.collapse();
      window.addEventListener('resize', this.collapse);
      window.addEventListener('mousedown', this.hideSubmenu);
    } else {
      this.disableResizeEvents();
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
    let tabsWrapperRight = tabsWrapperRef.getBoundingClientRect().right;
    const tabsRefRight = tabsRef.getBoundingClientRect().right;
    let i = visibleTabs.length - 1;

    if (tabsRefRight >= tabsWrapperRight - this.iconWidth) {
      if (this.props.position === 'right' && this.state.hiddenTabs.length > 0 &&
        tabsRef.getBoundingClientRect().width + this.nextTab[0] <
        tabsWrapperRef.getBoundingClientRect().width) {
        while (i < tabs.length - 1 &&
        tabsRef.getBoundingClientRect().width + this.nextTab[0] <
        tabsWrapperRef.getBoundingClientRect().width) {
          visibleTabs.splice(Number(hiddenTabs[0].key), 0, hiddenTabs.shift());
          i++;
        }
      } else {
        while (i > 0 && tabButtons[i] &&
        tabButtons[i].getBoundingClientRect().right >= tabsWrapperRight - this.iconWidth) {
          if (tabButtons[i].value !== selected) {
            hiddenTabs.unshift.apply(hiddenTabs, visibleTabs.splice(i, 1));
            this.nextTab.unshift(tabButtons[i].getBoundingClientRect().width);
          } else {
            tabsWrapperRight -= tabButtons[i].getBoundingClientRect().width;
          }
          i--;
        }
      }
    } else {
      while (i < tabs.length - 1 && tabButtons[i] &&
        tabButtons[i].getBoundingClientRect().right +
        this.nextTab[0] < tabsWrapperRight - this.iconWidth) {
        visibleTabs.splice(Number(hiddenTabs[0].key), 0, hiddenTabs.shift());
        this.nextTab.shift();
        i++;
      }
    }
    this.setState({ visibleTabs, hiddenTabs });
  };

  hideSubmenu = () => {
    this.setState({ subMenuOpened: false, contextMenu: undefined });
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
        left: rect.left
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
            <button onClick={this.expandMenu} value="expandIcon"><CollapseIcon /></button>
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

