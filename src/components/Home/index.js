import React, { Component } from 'react';
import logo from '../../images/trecker.png';

import './Home.css';


class Home extends Component {

  render() {
    return (
      <div className='home'>
        <h1>Hello Trecker</h1>
        <img src={logo} alt='trecker'/>
      </div>
    );
  }

}

export default Home;