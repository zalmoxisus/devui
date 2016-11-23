import React from 'react';
import { render, mount } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import Tabs from '../src/Tabs';
import { tabs } from '../src/Tabs/stories/data';

describe('Tabs', function () {
  it('renders correctly', () => {
    const wrapper = render(<Tabs tabs={tabs} onClick={() => {}} />);
    expect(renderToJson(wrapper)).toMatchSnapshot();
  });

  it('renders with props', () => {
    const wrapper = render(
      <Tabs
        tabs={tabs}
        onClick={() => {}}
        buttons={[
          <button key="button1">Button 1</button>,
          <button key="button2">Button 2</button>
        ]}
        compact selected="Tab2"
      />
    );
    expect(renderToJson(wrapper)).toMatchSnapshot();
  });

  it('should select tab', () => {
    const onClick = jest.fn();
    const wrapper = mount(<Tabs tabs={tabs} onClick={onClick} />);

    wrapper.find('button').first().simulate('click');
    expect(onClick).toBeCalled();
  });
});
