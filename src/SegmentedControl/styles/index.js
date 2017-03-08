import { css } from 'styled-components';

export const style = ({ theme, type, disabled }) => css`
  width: 100%;
  font-weight: 600;
  font-size: 1.1em;
  display: inline-block;
  margin: auto 0;
  border: 1px solid ${theme.base02};
  padding: 5px 9px;
  ${disabled ? `
  cursor: not-allowed;
  color: ${theme.base04};
  background-color: ${theme.base02};
  opacity: 0.7;
  ` : `
  cursor: handle;
  color: ${theme.base05};
  background-color: ${theme.base01};
  `}
`;
