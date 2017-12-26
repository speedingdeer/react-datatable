import React, { Component } from 'react';
import DataTable from '../DataTable';
import PropTypes from 'prop-types'

import { Container } from 'semantic-ui-react';

import './Home.css';


class Home extends Component {

  render() {
    return (
      <Container>
        <h2> The title within a container to give some margin </h2>
        <h2> The title within a container to give some margin </h2>
        <h2> The title within a container to give some margin </h2>
        <h2> The title within a container to give some margin </h2>
        <h2> The title within a container to give some margin </h2>
        <h2> The title within a container to give some margin </h2>
        <DataTable {...this.props}/>
        <h2> The title within a container to give some margin </h2>
        <h2> The title within a container to give some margin </h2>
        <h2> The title within a container to give some margin </h2>
        <h2> The title within a container to give some margin </h2>
        <h2> The title within a container to give some margin </h2>
        <h2> The title within a container to give some margin </h2>
        <h2> The title within a container to give some margin </h2>
        <h2> The title within a container to give some margin </h2>
        <h2> The title within a container to give some margin </h2>
        <h2> The title within a container to give some margin </h2>
        <h2> The title within a container to give some margin </h2>
        <h2> The title within a container to give some margin </h2>
        <h2> The title within a container to give some margin </h2>
        <h2> The title within a container to give some margin </h2>
        <h2> The title within a container to give some margin </h2>
        <h2> The title within a container to give some margin </h2>
        <h2> The title within a container to give some margin </h2>
        <h2> The title within a container to give some margin </h2>
        <h2> The title within a container to give some margin </h2>
        <h2> The title within a container to give some margin </h2>
        <h2> The title within a container to give some margin </h2>
      </Container>
    );
  }

  componentDidMount() {
    this.props.init()
  }

}

Home.propTypes = {
  init: PropTypes.func.isRequired
}

export default Home;