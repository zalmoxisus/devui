import React from 'react';
import { render, mount } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import { SegmentedControl } from '../src';
import { buttons } from '../src/SegmentedControl/stories/data';

describe('SegmentedControl', function () {
  it('renders correctly', () => {
    const wrapper = render(
      <SegmentedControl
        buttons={buttons}
        selected="Button1"
        disabled={false}
        onClick={() => {}}
      />
    );
    expect(renderToJson(wrapper)).toMatchSnapshot();
  });
  it('should handle the click event', () => {
    const onClick = jest.fn();
    const wrapper = mount(<SegmentedControl
      buttons={buttons}
      selected="Button1"
      disabled={false}
      onClick={onClick}
    />
    );

    wrapper.find('button').first().simulate('click');
    expect(onClick).toBeCalled();
  });
});
