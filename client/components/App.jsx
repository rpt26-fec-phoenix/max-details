import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Title from './Title.jsx';
import Details from './Details.jsx';
import About from './About.jsx';
import {sampleDetail, sampleHost, sampleSuperHost} from '../../test/sample-data.js';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Title details={sampleDetail} host={sampleSuperHost}/>
        <Details details={sampleDetail} host={sampleSuperHost}/>
        <About details={sampleDetail}/>
      </div>
    );
  }
}

export default App;