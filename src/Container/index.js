import React, { PropTypes } from 'react';
import { ThemeProvider } from 'styled-components';
import { getTheme } from '../themes';
import { ContainerWrapper } from './styles';

const Container = ({ themeData, children }) => (
  <ThemeProvider theme={getTheme(themeData)}>
    <ContainerWrapper>
      {children}
    </ContainerWrapper>
  </ThemeProvider>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  themeData: PropTypes.object.isRequired
};

export default Container;
