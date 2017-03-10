import React from 'react';

/* eslint-disable react/prop-types */
const Component = ({ selected }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      fontSize: '22px'
    }}
  >
    Selected {selected}
  </div>
);
/* eslint-enable react/prop-types */

const selector = button => ({ selected: button.name });

export const buttons = [
  {
    name: 'Button1',
    component: Component,
    selector
  },
  {
    name: 'Button2',
    component: Component,
    selector
  },
  {
    name: 'Button3',
    component: Component,
    selector
  }
];

export const simple10Buttons = [];
for (let i = 1; i <= 10; i++) simple10Buttons.push({ name: `Button${i}`, value: `${i}` });
