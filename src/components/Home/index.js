import React, { Component } from 'react';
import { Container, Header, Image } from 'semantic-ui-react'
import logo from '../../images/trecker.png';

import './Home.css';


class Home extends Component {

  render() {
    return (
        <Container className='home' textAlign='center'>
          <Header as='h2'>Hello Trecker</Header>
          <Image src={logo} size='small' />
        </Container>
    );
  }

}

export default Home;