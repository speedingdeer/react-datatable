import React, { Component } from 'react';
import faker from 'faker';

import { Container } from 'semantic-ui-react';

import DataTable from '../../components/DataTable';

import './Home.css';


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      columns: [], 
      data: [], 
    }
  }

  render() {
    return (
      <Container>
        <h2> The title within a container to give some margin </h2>
        <h2> The title within a container to give some margin </h2>
        <h2> The title within a container to give some margin </h2>
        <h2> The title within a container to give some margin </h2>
        <h2> The title within a container to give some margin </h2>
        <h2> The title within a container to give some margin </h2>
        <DataTable {...this.state}/>
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

    this.setState({
        columns: [{
          attribute: 'field_name',
          label: 'Name'
        }, {
          attribute: 'cultivation_id',
          label: 'Nummer'
        }, {
          attribute: 'company_name',
          label: 'Betrieb'
        }, {
          attribute: 'area_in_hectares',
          label: 'Fläche'
        }, {
          attribute: 'active',
          label: 'Aktiv'
        }, {
          attribute: 'crop_name',
          label: 'Kultur'
        }, {
          attribute: 'harvest_year',
          label: 'Ernte'
        }],
        data: Array(50 + faker.random.number(50)).fill().map((_, i) => { return {
          field_name: faker.name.findName(),
          area_in_hectares: parseFloat(( 1 + faker.random.number(20) ) / ( 1 + faker.random.number(20) )).toFixed(2),
          active: faker.random.boolean(),
          company_name: faker.company.companyName(),
          cultivation_id: i,
          crop_name: faker.name.findName(),
          harvest_year: 2000 + faker.random.number(18)
        }})
      });
    }
}

export default Home;