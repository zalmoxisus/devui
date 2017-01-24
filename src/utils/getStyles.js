import styled from 'styled-components';

export default (styles, component, multiple) =>
  styled(component || 'div')(
    '',
    props => (!multiple ? styles : styles[props.theme.type] || styles.default)(props),
  );

/*
 Equivalent to
 const SelectContainer = styled(ReactSelect)`
 ${props => styles[props.theme.type](props)}
 `;
 */

// TODO: memoize it
