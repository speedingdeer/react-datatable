import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import DataTable from '../../components/DataTable';
import {fakeData} from '../../util';


class Demo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      columns: [], 
      data: [], 
    }
  }

  spacing() {
    return (
      <p style={{marginTop: '3rem'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed o eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    )
  }

  render() {
    return (
      <Container className='home'>
        <h2>
          Data Table within a parent container
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed o eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <DataTable {...this.state}/>
        {this.spacing()}
        {this.spacing()}
        {this.spacing()}
        {this.spacing()}
        {this.spacing()}
        {this.spacing()}
        {this.spacing()}
        {this.spacing()}
        {this.spacing()}
        {this.spacing()}
        {this.spacing()}
        {this.spacing()}
        {this.spacing()}
        {this.spacing()}
      </Container>
    );
  }

  componentDidMount() {
      this.setState({...fakeData()})
    }
}

export default Demo;
