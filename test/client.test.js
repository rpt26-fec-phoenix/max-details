import React from 'react';
import { shallow, mount, render } from 'enzyme';

const Foo = () => {
  return (
    <div className="foo bar" />
  );
};

describe('test', () => {
  test('test something', () => {
    const wrapper = shallow(<Foo />);
    expect(wrapper.contains(<div className="foo bar" />)).toBe(true);
  });
});
