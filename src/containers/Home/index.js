import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { Container, List, Image } from 'semantic-ui-react';

import logo from '../../images/logo.png';

import './Home.css';


class Home extends Component {

  render() {
    return (
      <Container className='home'>
        <h2>
        <Image src={logo} size='small'/>
        </h2>
        <h2>
          Speedindeer DataTable
        </h2>
        <Container text>
        <p> There are two demos provided: </p>
        <List bulleted>
          <List.Item>
            <Link to={`${process.env.PUBLIC_URL}/demo-full-screen`}>
              Full Screen Data Table
            </Link>
          </List.Item>
          <List.Item>
            <Link to={`${process.env.PUBLIC_URL}/demo`}>
              Data Table withing its parent container
            </Link>
          </List.Item>
        </List>
        </Container>
      </Container>
    );
  }

}

export default Home;