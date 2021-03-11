import React from 'react';
import { shallow, mount, render } from 'enzyme';

import App from '../client/components/App.jsx';
import Title from '../client/components/Title.jsx';
import Details from '../client/components/Details.jsx';
import About from '../client/components/About.jsx';
import Detail from '../client/components/Detail.jsx';

describe('Shallow rendering', () => {
  test('App should contain Title, Detail, and About components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsAllMatchingElements([<Title />, <Details />, <About />])).toBe(true);
  });

  test('Details should contain Detail component', () => {
    const wrapper = shallow(<Details />);
    expect(wrapper.contains(<Detail />)).toBe(true);
  });
});
