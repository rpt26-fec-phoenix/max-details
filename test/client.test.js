import React from 'react';
import { shallow, mount, render } from 'enzyme';

import App from '../client/components/App.jsx';
import Title from '../client/components/Title.jsx';
import Details from '../client/components/Details.jsx';
import About from '../client/components/About.jsx';
import Detail from '../client/components/Detail.jsx';
import { sampleDetail, sampleSelfChecKInAllowedDetail, sampleEntirePlaceDetail, sampleHost, sampleSuperHost} from './sample-data.js';

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

describe('Detail rendering logic', () => {
  test('Details should include superHost if host is superHost', () => {
    const wrapper = shallow(<Details details={sampleDetail} host={sampleSuperHost}/>);
    expect(wrapper.contains(<Detail type={'superHost'} details={sampleDetail} host={sampleSuperHost}/>));
  });

  xtest('Details should include selfCheckIn if host is not superHost and selfCheckIn is allowed', () => {

  });

  xtest('Details should include entirePlace if property is entirePlace', () => {

  });

  xtest('Details should only include enhancedClean, cancellation, and houseRules if not superHost, selfCheckIn, or entirePlace', () => {

  });
});
