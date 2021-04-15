import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import GlobalStyles from './globalStyle.jsx';
import Title from './Title.jsx';
import Details from './Details.jsx';
import About from './About.jsx';
import HouseRules from './HouseRules.jsx';
import {sampleDetail, sampleHost, sampleSuperHost} from '../../test/sample-data.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {},
      host: sampleHost,
      seen: false
    };
    this.togglePop = this.togglePop.bind(this);
  }

  componentDidMount() {
    this.getDetails();
    this.getHostInfo();
  }

  getDetails() {
    const urlCharacters = window.location.href.split('/');
    const propertyId = urlCharacters[urlCharacters.length - 2];

    axios.get(`/details/${propertyId}`)
      .then((details) => {
        this.setState({
          details: details.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getHostInfo() {
    const urlCharacters = window.location.href.split('/');
    const propertyId = urlCharacters[urlCharacters.length - 2];

    axios.get(`http://13.57.41.115:3007/${propertyId}/host/`)
      .then((hostInfo) => {
        this.setState({
          host: hostInfo.data[0]
        });
      })
      .catch((err) => {
        console.log(err);
      })
  }

  togglePop() {
    this.setState({
      seen: !this.state.seen
    });
  }

  render() {
    const {details, host, seen} = this.state;
    if (details.propertyId === undefined) {
      return <div></div>;
    } else {
      return (
        <div>
          <GlobalStyles />
          <div id="details">
            <Title details={details} host={host}/>
            <Details details={details} host={host} togglePop={this.togglePop}/>
            <About details={details}/>
          </div>
          { seen ? <HouseRules rules={details.houseRules} togglePop={this.togglePop}/> : null}
        </div>
      );
    }
  }
}

export default App;