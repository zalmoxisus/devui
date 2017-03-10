import styled from 'styled-components';

export default (styles, component, multiple) =>
  styled(component || 'div')`${
    !multiple ? styles :
      props => (styles[props.theme.type] || styles.default)
  }`;

/*
 Equivalent to
 const SelectContainer = styled(ReactSelect)`
 ${props => styles[props.theme.type](props)}
 `;
 */

// TODO: memoize it
