import React, { PropTypes } from 'react';
import { ThemeProvider } from 'styled-components';
import { getTheme } from '../utils/theme';
import { ContainerWrapper } from './styles';

const Container = ({ themeData, className, children }) => (
  <ThemeProvider theme={getTheme(themeData)}>
    <ContainerWrapper className={className}>
      {children}
    </ContainerWrapper>
  </ThemeProvider>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  themeData: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default Container;
