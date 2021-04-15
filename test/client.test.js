/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow, mount, render } from 'enzyme';

import App from '../client/components/App.jsx';
import Title from '../client/components/Title.jsx';
import Details from '../client/components/Details.jsx';
import About from '../client/components/About.jsx';
import Detail from '../client/components/Detail.jsx';
import { createHouseRules } from '../client/helpers.jsx';
import {
  sampleDetail,
  sampleSelfChecKInAllowedDetail,
  sampleEntirePlaceDetail,
  sampleHost,
  sampleSuperHost,
  allHouseRules,
  onlySuitableAge,
  allSuitableAge,
  noRules
} from './sample-data.js';

describe('Shallow rendering', () => {
  test('App should contain Title, Detail, and About components', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({details: sampleDetail});
    expect(wrapper.containsAllMatchingElements([<Title />, <Details />, <About />])).toBe(true);
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

describe('houseRules constructor', () => {
  test('should return a string with suitableAge and all three rules', () => {
    const rules = ['infants', 'pets', 'parties', 'smoking'];
    rules.forEach((rule) => {
      expect(createHouseRules(allHouseRules).indexOf(rule)).toBeGreaterThan(-1);
    });
  });

  test('should return a string with only suitableAge', () => {
    expect(createHouseRules(onlySuitableAge)).toBe(`This place isn't suitable for children.`);
  });

  test('should return a string with no smoking and no pets', () => {
    const rules = ['pets', 'smoking'];
    rules.forEach((rule) => {
      expect(createHouseRules(allSuitableAge).indexOf(rule)).toBeGreaterThan(-1);
    });
  });

  test('should return an empty string', () => {
    expect(createHouseRules(noRules)).toBe('');
  })
});
