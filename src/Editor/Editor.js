import React, { Component, PropTypes } from 'react';
import CodeMirror from 'codemirror';

export default class Editor extends Component {
  componentDidMount() {
    this.cm = CodeMirror( // eslint-disable-line new-cap
      this.node,
      {
        value: this.props.value,
        mode: this.props.mode,
        lineNumbers: this.props.lineNumbers,
        lineWrapping: this.props.lineWrapping,
        readOnly: this.props.readOnly,
        autofocus: this.props.autofocus,
        foldGutter: this.props.foldGutter,
        gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
        theme: this.props.theme
      }
    );
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.cm.setValue(nextProps.value);
    }
    if (nextProps.theme !== this.props.theme) {
      this.cm.setOption('theme', nextProps.theme);
    }
    if (nextProps.readOnly !== this.props.readOnly) {
      this.cm.setOption('readOnly', nextProps.readOnly);
    }
    if (nextProps.lineNumbers !== this.props.lineNumbers) {
      this.cm.setOption('lineNumbers', nextProps.lineNumbers);
    }
    if (nextProps.lineWrapping !== this.props.lineWrapping) {
      this.cm.setOption('lineWrapping', nextProps.lineWrapping);
    }
    if (nextProps.foldGutter !== this.props.foldGutter) {
      this.cm.setOption('foldGutter', nextProps.foldGutter);
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillUnmount() {
    const node = this.node;
    node.removeChild(node.children[0]);
    this.cm = null;
  }

  getRef = node => {
    this.node = node;
  };

  render() {
    return <div ref={this.getRef} />;
  }
}

Editor.propTypes = {
  value: PropTypes.string,
  mode: PropTypes.string,
  lineNumbers: PropTypes.bool,
  lineWrapping: PropTypes.bool,
  readOnly: PropTypes.bool,
  foldGutter: PropTypes.bool,
  autofocus: PropTypes.bool,
  theme: PropTypes.string
};

Editor.defaultProps = {
  value: '',
  mode: 'javascript',
  theme: 'default',
  lineNumbers: true,
  lineWrapping: false,
  readOnly: false,
  foldGutter: true,
  autofocus: false
};
