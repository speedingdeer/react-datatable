import React from 'react';
import Home from '../Home';
import DataTable from '../../components/DataTable';


class HomeFullWidth extends Home {

  render() {
    return ( <DataTable {...this.state}/> );
  }

}

export default HomeFullWidth;