import { css } from 'styled-components';
import { fadeIn } from '../../utils/animations';

const both = (tooltipPosition) => {
  switch (tooltipPosition) {
    case 'bottom':
      return `
      transform: translate(-50%, 100%);
      top: auto;
      `;
    case 'left':
      return `
      transform: translate(-100%, -50%);
      top: 50%;
      right: auto;
      `;
    case 'right':
      return `
      transform: translate(100%, -50%);
      top: 50%;
      left: auto;
      `;
    case 'bottom-left':
      return `
      transform: translate(-100%, 100%);
      top: auto;
      `;
    case 'bottom-right':
      return `
      transform: translateY(100%);
      top: auto;
      `;
    case 'top-left':
      return `
      transform: translate(-100%, -100%);
      `;
    case 'top-right':
      return `
      transform: translateY(-100%);
      `;
    default:
      return `
       transform: translate(-50%, -100%);
      `;
  }
};

const before = (tooltipPosition) => {
  switch (tooltipPosition) {
    case 'bottom-left':
      return `
      left: calc(50% + 11px);
      `;
    case 'bottom-right':
      return `
      left: calc(50% - 11px);
      `;
    case 'top-left':
      return `
      left: calc(50% + 11px);
      `;
    case 'top-right':
      return `
      left: calc(50% - 11px);
      `;
    default:
  }
};

const after = (tooltipPosition, color) => {
  switch (tooltipPosition) {
    case 'bottom':
      return `
      border-color: transparent transparent ${color} transparent;
      `;
    case 'left':
      return `
      border-color: transparent transparent transparent ${color};
      `;
    case 'right':
      return `
      border-color: transparent ${color} transparent transparent;
      `;
    case 'bottom-left':
      return `
      left: calc(50% + 10px);
      border-color: transparent transparent ${color} transparent;
      `;
    case 'bottom-right':
      return `
      left: calc(50% - 10px);
      border-color: transparent transparent ${color} transparent;
      `;
    case 'top-left':
      return `
      left: calc(50% + 10px);
      border-color: ${color} transparent transparent transparent;
      `;
    case 'top-right':
      return `
      left: calc(50% - 10px);
      border-color: ${color} transparent transparent transparent;
      `;
    default:
      return `
       border-color: ${color} transparent transparent transparent;
      `;
  }
};

const getDirection = (tooltipPosition) => {
  return (tooltipPosition.indexOf('-') > 0) ?
    tooltipPosition.substring(0, tooltipPosition.indexOf('-')) : tooltipPosition;
};

export const tooltipStyle = ({ theme, tooltipTitle, tooltipPosition, toolbar }) => css`
  display: inline-block;
  position: relative;
  ${toolbar ? `
  flex-grow: 1;
  padding: 2px 1px;
  ` : ''}

  &:before {
    content: "${tooltipTitle}";
    white-space: nowrap;
    color: ${theme.base07};
    padding: 0.5em 0.7em;
    background: ${theme.base03};
    box-shadow: 0 2px 2px -1px ${theme.base03}, 0 1px 0px 0px ${theme.base04};
  }

  &:after,
  &:before {
    transition: 0.3s ease-in-out;
    opacity: 0;
    visibility: hidden;
    position: absolute;
    left: 50%;
    z-index: 999;
    ${both(tooltipPosition)}
    user-select: none;
  }

  &:after {
    transition-delay: 0ms;
  }
  &:before {
    transition-delay: 250ms;
  }

  &:before {
    ${before(tooltipPosition)}
    ${getDirection(tooltipPosition)}: 3px;
    ${theme.type === 'material' ? `animation: ${fadeIn} 500ms;` : ''}
  }

  &:after {
    content: "";
    border-style: solid;
    border-width: 7px;
    ${after(tooltipPosition, theme.type === 'material' ? 'transparent' : theme.base03)}
    ${getDirection(tooltipPosition)}: 8px;
  }

  &:hover:after,
  &:hover:before {
    opacity: 1;
    visibility: visible;
  }
  &:hover:after {
    ${getDirection(tooltipPosition)}: 8px;
    transition-delay: 400ms;
  }
  &:hover:before {
    ${getDirection(tooltipPosition)}: -4px;
    transition-delay: 100ms;
  }
`;
