import React from 'react';
import PropTypes from 'prop-types'

import { Table } from 'semantic-ui-react'

import './FixedHeader.css'

const FixedHeader = ({columns, columns_sizes}) => (
  <Table striped unstackable className='fixed-header-table'>
    <Table.Header>
      <Table.Row>
        {columns.map( (c, i) =>
          <Table.HeaderCell key={i}>
            {columns_sizes[c.attribute] &&
              <div style={{width: `${columns_sizes[c.attribute].entry.width}px`}}>
                {c.label}
              </div>
            }
          </Table.HeaderCell>
        )}
      </Table.Row>
    </Table.Header>
  </Table>
)

FixedHeader.propTypes = {
  // this check is redundant, it's OK to double check the PropTypes but is shouldn't by just copy pasted
  columns: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    attribute: PropTypes.string.isRequired,
  })).isRequired,


}

export default FixedHeader;