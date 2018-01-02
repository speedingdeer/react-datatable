import React from 'react';
import PropTypes from 'prop-types'
import { Table } from 'semantic-ui-react'
import { columns as pt_columns } from '../proptypes';

import './FixedHeader.css'

const FixedHeader = ({columns, table_size, columns_sizes, rect, rect_inner}) => {

  let style = {};

  // we could render nothing here when not needed but it feels like it's smoother to switch display: none

  // display only if window scrolled over the data table header
  // display only if doesn't scroll over the table body (if not scollerd too far)
  if(rect.top > 0 || rect.top + rect.height < 0)  { style.display = 'none'; }

  return (
    <div className='fixed-header' style={{width: `${table_size ? table_size.entry.width : 0}px`, ...style}}>
      <Table striped unstackable style={{marginLeft: `${rect_inner.x - rect.x}px`}}>
        <Table.Header>
          <Table.Row>
            {columns.map( (c, i) =>
              <Table.HeaderCell key={i}>
                <div style={{width: `${columns_sizes[c.attribute] ? columns_sizes[c.attribute].entry.width : 0}px`}}>
                  <span>{c.label}</span>
                </div>
              </Table.HeaderCell>
            )}
          </Table.Row>
        </Table.Header>
      </Table>
    </div>
  )

}

FixedHeader.propTypes = {
  columns: pt_columns.isRequired,
  // @TODO: Define the rect / size PropTypes.shape and require it here
  table_size: PropTypes.object.isRequired,
  columns_sizes: PropTypes.object.isRequired,
  rect: PropTypes.object.isRequired,
  rect_inner: PropTypes.object.isRequired
}

export default FixedHeader;