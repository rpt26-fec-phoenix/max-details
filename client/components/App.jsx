import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Title from './Title.jsx';
import Details from './Details.jsx';
import About from './About.jsx';
import {sampleDetail, sampleHost, sampleSuperHost} from '../../test/sample-data.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {},
      host: sampleHost
    };
  }

  componentDidMount() {
    this.getDetails();
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

  render() {
    const {details, host} = this.state;
    if (details.propertyId === undefined) {
      return <div></div>;
    } else {
      return (
        <div>
          <Title details={details} host={host}/>
          <Details details={details} host={host}/>
          <About details={details}/>
        </div>
      );
    }
  }
}

export default App;