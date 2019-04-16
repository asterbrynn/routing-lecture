import React, { Component } from 'react';
import {HashRouter as Router} from 'react-router-dom';
import Nav from './components/Nav';
import router from './router';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav/>
          {router}
        </div>
      </Router>
    );
  }
}

export default App;
