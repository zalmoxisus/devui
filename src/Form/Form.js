import React, { Component, PropTypes } from 'react';
import JSONSchemaForm from 'react-jsonschema-form';
import getStyles from '../utils/getStyles';
import { style } from './styles';
import Button from '../Button';
import customWidgets from './widgets';

const FormContainer = getStyles(style, JSONSchemaForm);

export default class Form extends Component {
  render() {
    const { widgets, children, ...rest } = this.props;
    return (
      <FormContainer {...rest} widgets={{ ...customWidgets, ...widgets }}>
        {children || <Button big type="submit">Submit</Button>}
      </FormContainer>
    );
  }
}

Form.propTypes = {
  children: PropTypes.any,
  schema: PropTypes.object.isRequired,
  widgets: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object]))
};
