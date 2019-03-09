import React, { Component } from 'react';
import * as Wrld from 'wrld.js';

import './App.css';

const wrldApiKey = '01a64bb7f957ee81a59c32d2aecd4a2a';
const abertay = [56.46335, -2.97490];

class App extends Component {

  componentDidMount() {
    Wrld.map('map', wrldApiKey, {
      // These are the options that are referred to at: https://www.wrld3d.com/wrld.js/latest/docs/api/L.Wrld.map/
      center: abertay,
      zoom: 18
    });
  }

  render() {
    return (

        <div className='App'>
          <header className='App-header'>

            <div id='overlay' className='wrld-widget-container'>&nbsp;</div>
            <div id='map'>&nbsp;</div>

          </header>
        </div>

    );
  }
}

export default App;
