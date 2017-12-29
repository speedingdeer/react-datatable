import React from 'react';
import PropTypes from 'prop-types'
import { Table } from 'semantic-ui-react'

import './FixedHeader.css'

const FixedHeader = ({columns, table_size, columns_sizes, rect, rect_inner}) => {

  if(rect.top > 0)  { return ('') } // display only if fixed
  if(rect.top + rect.height < 0) { return ('') } // display only if doesn't scroll over the table body

  return (
    <div className='fixed-header' style={{width: `${table_size ? table_size.entry.width : 0}px`}}>
      <Table striped unstackable style={{marginLeft: `${rect_inner.x - rect.x}px`}}>
        <Table.Header>
          <Table.Row>
            {columns.map( (c, i) =>
              <Table.HeaderCell key={i}>
                <div style={{width: `${columns_sizes[c.attribute] ? columns_sizes[c.attribute].entry.width : 0}px`}}> {c.label} </div>
              </Table.HeaderCell>
            )}
          </Table.Row>
        </Table.Header>
      </Table>
    </div>
  )

}

FixedHeader.propTypes = {
  // this check is redundant, it's OK to double check the PropTypes but is shouldn't by just copy pasted
  columns: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    attribute: PropTypes.string.isRequired,
  })).isRequired,
  // @TODO: Define the rect / size PropTypes.shape and require it here
  table_size: PropTypes.object.isRequired,
  columns_sizes: PropTypes.object.isRequired,
  rect: PropTypes.object.isRequired,
  rect_inner: PropTypes.object.isRequired
}

export default FixedHeader;