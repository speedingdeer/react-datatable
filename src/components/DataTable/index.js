import React from 'react';
import PropTypes from 'prop-types'

import { Table } from 'semantic-ui-react'

import './DataTable.css';

const DataTable = ({columns, data}) => (
  
  <Table celled striped>
    <Table.Header>
      <Table.Row>
        {columns.map( (c, i) =>
          <Table.HeaderCell key={i}>{c.label}</Table.HeaderCell>
        )}
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {data.map( (d, di) =>
        <Table.Row key={di}>
          {columns.map( (c, ci) =>
            <Table.Cell key={ci}>
              {d[c.attribute]}
            </Table.Cell>
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