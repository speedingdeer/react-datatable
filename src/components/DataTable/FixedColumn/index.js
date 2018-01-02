import React from 'react';
import PropTypes from 'prop-types'
import { Table } from 'semantic-ui-react'
import Row from '../Row';
import Header from '../Header';
import { columns as pt_columns } from '../proptypes';

import './FixedColumn.css'

const FixedColumn = ({columns, data, table_size, columns_sizes, rect, onRowEnter, onRowLeave, hovered}) => {


  function headerStyle() {
    let style = { top: 0 };
    if(rect.y > 0) style.top = rect.y;
    if(rect.top > 0 || rect.top + rect.height < 0)  { style.display = 'none'; }
    return style
  }

  return (
    <div className='fixed-column' style={{width: `${columns_sizes[columns[0].attribute] ? columns_sizes[columns[0].attribute].entry.width : 0}px`, position: 'fixed'}}>
      <Table striped unstackable className='column-header' style={{width: `${columns_sizes[columns[0].attribute] ? columns_sizes[columns[0].attribute].entry.width : 0}px`, ...headerStyle()}}>
        <Table.Header>
          <Table.Row>
            {columns.slice(0,1).map( (c, i) =>
              <Table.HeaderCell key={i}>
                <div style={{width: `${columns_sizes[c.attribute] ? columns_sizes[c.attribute].entry.width : 0}px`}}> <span>{c.label}</span> </div>
              </Table.HeaderCell>
            )}
          </Table.Row>
        </Table.Header>
      </Table>
      <div className='column-body' style={{marginTop: `${rect.y}px`, width: `${table_size.entry.width}px`}}>
        <Table striped unstackable>
          <Header columns={columns}/>
          <Table.Body>
            {data.map( (d, di) =>
              <Row key={di}
                record={d} columns={columns} idx={di}
                onMouseEnter={onRowEnter}
                onMouseLeave={onRowLeave}
                hovered={hovered} />
            )}
          </Table.Body>
        </Table>
      </div>
    </div>
  )

}

FixedColumn.propTypes = {
  columns: pt_columns.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  // @TODO: Define the rect / size PropTypes.shape and require it here
  table_size: PropTypes.object.isRequired,
  columns_sizes: PropTypes.object.isRequired,
  rect: PropTypes.object.isRequired,
  onRowEnter: PropTypes.func.isRequired,
  onRowLeave: PropTypes.func.isRequired,
  hovered: PropTypes.number.isRequired,
}

export default FixedColumn;