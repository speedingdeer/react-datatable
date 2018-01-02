import React from 'react';
import Demo from '../Demo';
import DataTable from '../../components/DataTable';


class DemoFullScreen extends Demo {

  render() {
    return ( <DataTable {...this.state}/> );
  }

}

export default DemoFullScreen;