import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import ReactSelect from 'react-select';
import { selectStyle } from './styles';

const SelectContainer = styled(ReactSelect)('',
  ({ theme, openOuterUp, menuMaxHeight }) => selectStyle(theme, openOuterUp, menuMaxHeight)
);
/*
  Equivalent to
   const SelectContainer = styled(ReactSelect)`
   ${({ theme, openOuterUp, menuMaxHeight }) => selectStyle(theme, openOuterUp, menuMaxHeight)}
   `;
*/

export default class Select extends Component {
  render() {
    return (
      <SelectContainer {...this.props} />
    );
  }
}

Select.propTypes = {
  autosize: PropTypes.bool,             // whether to enable autosizing or not
  clearable: PropTypes.bool,            // should it be possible to reset value
  disabled: PropTypes.bool,             // whether the Select is disabled or not
  isLoading: PropTypes.bool,            // whether the Select is loading externally or not
  menuMaxHeight: PropTypes.number,      // maximum css height for the opened menu of options
  multi: PropTypes.bool,                // multi-value input
  searchable: PropTypes.bool,           // whether to enable searching feature or not
  value: PropTypes.any,                 // initial field value
  valueKey: PropTypes.string,           // path of the label value in option objects
  openOuterUp: PropTypes.bool           // value to control the opening direction
};

Select.defaultProps = {
  autosize: false,
  clearable: false,
  menuMaxHeight: 200
};
