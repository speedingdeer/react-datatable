import React from 'react';
import PropTypes from 'prop-types'
import { Table } from 'semantic-ui-react'

import './FixedHeader.css'

const FixedHeader = ({columns, table_size, columns_sizes, rect}) => {


  function display() {
    if(!rect || !table_size)  { return 'none'; }
    if(rect.top > 0)  { return 'none'; }
    if(rect.top + rect.height < 0) { return 'none' }
    return 'table';
  }

  return (
    <Table striped unstackable className='fixed-header-table' style={{width: `${table_size ? table_size.entry.width : 0}px`, display: `${display()}`}}>
      <Table.Header>
        <Table.Row>
          {columns.map( (c, i) =>
            <Table.HeaderCell key={i} style={{width: `${columns_sizes[c.attribute] ? columns_sizes[c.attribute].entry.width : 0}px`}}>
              {c.label}
            </Table.HeaderCell>
          )}
        </Table.Row>
      </Table.Header>
    </Table>
  )
}

FixedHeader.propTypes = {
  // this check is redundant, it's OK to double check the PropTypes but is shouldn't by just copy pasted
  columns: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    attribute: PropTypes.string.isRequired,
  })).isRequired,


}

export default FixedHeader;