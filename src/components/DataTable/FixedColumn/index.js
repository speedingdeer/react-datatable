import React from 'react';
import PropTypes from 'prop-types'
import { Table } from 'semantic-ui-react'
import Cell from '../Cell';

import './FixedColumn.css'

const FixedColumn = ({columns, data, table_size, columns_sizes, rect, rect_inner}) => {

  // display only if fixed

  return (
    <div className='fixed-column' style={{width: `${columns_sizes[columns[0].attribute] ? columns_sizes[columns[0].attribute].entry.width : 0}px`}}>
      <Table striped unstackable>
        <Table.Header>
          <Table.Row>
            {columns.map( (c, i) =>
              <Table.HeaderCell key={i}>
                <div style={{width: `${columns_sizes[c.attribute] ? columns_sizes[c.attribute].entry.width : 0}px`}}> {c.label} </div>
              </Table.HeaderCell>
            )}
          </Table.Row>
        </Table.Header>
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
    </div>
  )

}

FixedColumn.propTypes = {
  // this check is redundant, it's OK to double check the PropTypes but is shouldn't by just copy pasted
  // @TODO: Define the columns shape and require it here
  columns: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    attribute: PropTypes.string.isRequired,
  })).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  // @TODO: Define the rect / size PropTypes.shape and require it here
  table_size: PropTypes.object.isRequired,
  columns_sizes: PropTypes.object.isRequired,
  rect: PropTypes.object.isRequired,
  rect_inner: PropTypes.object.isRequired
}

export default FixedColumn;