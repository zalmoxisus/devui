import React, { Component, PropTypes } from 'react';
import CodeMirror from 'codemirror';

export default class Editor extends Component {
  componentDidMount() {
    this.codeMirror = CodeMirror( // eslint-disable-line new-cap
      this.node,
      {
        value: this.props.value,
        mode: this.props.mode,
        lineNumbers: this.props.lineNumbers,
        lineWrapping: this.props.lineWrapping,
        readOnly: this.props.readOnly,
        autofocus: this.props.autofocus,
        theme: this.props.theme
      }
    );
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.codeMirror.setValue(nextProps.value);
    }
    if (nextProps.theme !== this.props.theme) {
      this.codeMirror.setOption('theme', nextProps.theme);
    }
    if (nextProps.readOnly !== this.props.readOnly) {
      this.codeMirror.setOption('readOnly', nextProps.readOnly);
    }
    if (nextProps.lineNumbers !== this.props.lineNumbers) {
      this.codeMirror.setOption('lineNumbers', nextProps.lineNumbers);
    }
    if (nextProps.lineWrapping !== this.props.lineWrapping) {
      this.codeMirror.setOption('lineWrapping', nextProps.lineWrapping);
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillUnmount() {
    const node = this.node;
    node.removeChild(node.children[0]);
    this.codeMirror = null;
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
  autofocus: false
};
