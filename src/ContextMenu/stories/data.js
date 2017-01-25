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

const selector = item => ({ selected: item.name });

export const items = [
  {
    name: 'Menu Item 1',
    component: Component,
    selector
  },
  {
    name: 'Menu Item 2',
    component: Component,
    selector
  },
  {
    name: 'Menu Item 3',
    component: Component,
    selector
  }
];
