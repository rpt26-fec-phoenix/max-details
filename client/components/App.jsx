import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Title from './Title.jsx';
import Details from './Details.jsx';
import About from './About.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Title />
        <Details />
        <About />
      </div>
    );
  }
}

export default App;