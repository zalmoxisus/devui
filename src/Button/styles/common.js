import { css } from 'styled-components';
import { fadeIn } from '../../utils/animations';

const both = {
  top: `
  transform: translate(-50%, -100%);
  `,
  bottom: `
  transform: translate(-50%, 100%);
  top: auto;
  `,
  left: `
  transform: translate(-100%, -50%);
  top: 50%;
  right: auto;
  `,
  right: `
  transform: translate(100%, -50%);
  top: 50%;
  left: auto;
  `,
  bottomLeft: `
  transform: translate(-100%, 100%);
  top: auto;
  `,
  bottomRight: `
  transform: translateY(100%);
  top: auto;
  `,
  topLeft: `
  transform: translate(-100%, -100%);
  `,
  topRight: `
  transform: translateY(-100%);
  `
};

const before = {
  top: 'top: -10px;',
  bottom: 'bottom: -10px;',
  left: 'left: -10px;',
  right: 'right: -10px;',
  bottomLeft: 'bottom: -10px; left: calc(50% + 12px);',
  bottomRight: 'bottom: -10px; left: calc(50% - 12px);',
  topLeft: 'top: -10px; left: calc(50% + 12px);',
  topRight: 'top: -10px; left: calc(50% - 12px);'
};

const after = (tooltipPosition, color) => {
  switch (tooltipPosition) {
    case 'bottom':
      return `
      bottom: 8px;
      border-color: transparent transparent ${color} transparent;
      `;
    case 'left':
      return `
      left: 8px;
      border-color: transparent transparent transparent ${color};
      `;
    case 'right':
      return `
      right: 8px;
      border-color: transparent ${color} transparent transparent;
      `;
    case 'bottomLeft':
      return `
      bottom: 8px;
      left: calc(50% + 10px);
      border-color: transparent transparent ${color} transparent;
      `;
    case 'bottomRight':
      return `
      bottom: 8px;
      left: calc(50% - 10px);
      border-color: transparent transparent ${color} transparent;
      `;
    case 'topLeft':
      return `
      top: 8px;
      left: calc(50% + 10px);
      border-color: ${color} transparent transparent transparent;
      `;
    case 'topRight':
      return `
      top: 8px;
      left: calc(50% - 10px);
      border-color: ${color} transparent transparent transparent;
      `;
    default:
      return `
       top: 8px;
       border-color: ${color} transparent transparent transparent;
      `;
  }
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
    top: -10px;
    color: ${theme.base07};
    padding: 0.8em 1em;
    background: ${theme.base03};
    box-shadow: 0 2px 2px -1px ${theme.base03}, 0 1px 0px 0px ${theme.base04};
  }

  &:after,
  &:before {
    display: none;
    opacity: 0;
    position: absolute;
    left: 50%;
    z-index: 999;
    ${both[tooltipPosition]}
    user-select: none;
  }

  &:before {
    ${before[tooltipPosition]}
    ${theme.type === 'material' ? `animation: ${fadeIn} 500ms;` : ''}
  }

  &:after {
    content: "";
    border-style: solid;
    border-width: 10px;
    ${after(tooltipPosition, theme.type === 'material' ? 'transparent' : theme.base03)}
  }

  &:hover:after,
  &:hover:before {
    display: block;
    opacity: 1;
  }
`;
