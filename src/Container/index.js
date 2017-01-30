import React, { PropTypes } from 'react';
import { ThemeProvider } from 'styled-components';
import { getTheme } from '../utils/theme';
import { MainContainerWrapper, ContainerWrapper } from './styles';

const Container = ({ themeData, className, children }) => {
  if (!themeData) {
    return (
      <ContainerWrapper className={className}>
        {children}
      </ContainerWrapper>
    );
  }

  return (
    <ThemeProvider theme={getTheme(themeData)}>
      <MainContainerWrapper className={className}>
        {children}
      </MainContainerWrapper>
    </ThemeProvider>
  );
};

Container.propTypes = {
  children: PropTypes.node,
  themeData: PropTypes.object,
  className: PropTypes.string
};

export default Container;
