import React, { Component } from 'react';
import DataTable from '../DataTable';
import PropTypes from 'prop-types'

import './Home.css';


class Home extends Component {

  render() {
    return (
      <DataTable />
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