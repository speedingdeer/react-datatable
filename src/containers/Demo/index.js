import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import faker from 'faker';
import DataTable from '../../components/DataTable';


class Demo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      columns: [], 
      data: [], 
    }
  }

  render() {
    return (
      <Container className='home'>
        <h2>
          Data Table within a parent container
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <DataTable {...this.state}/>
        <p></p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
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

export default Demo;
