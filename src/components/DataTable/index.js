import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';

import Header from './Header';
import Cell from './Cell';

// import './DataTable.css'; nth yet

const DataTable = ({columns, data}) => (
  
  <Table striped>
    <Header columns={columns}/>
    <Table.Body>
      {data.map( (d, di) =>
        <Table.Row key={di}>
          {columns.map( (c, ci) =>
            <Cell key={ci} value={d[c.attribute]}/>
          )}
        </Table.Row>
      )}
    </Table.Body>
  </Table>
)

DataTable.propTypes = {
  // label and attribute are required
  columns: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    attribute: PropTypes.string.isRequired
  })).isRequired,
  // data can be any array of objects
  // it's fine if they are empty (will appear as empty row, but they can't be null or undefiend etc.)
  data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default DataTable;