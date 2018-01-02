import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import Cell from '../Cell';


const Row = ({record, columns, idx, onMouseEnter, onMouseLeave, hovered}) => {
  
  function className() {
    // @TODO: use classnames
    if (idx === hovered) return 'hovered';
    return '';
  }

  return (

    <Table.Row onMouseEnter={() => { onMouseEnter(idx) }}
      onMouseLeave={() => { onMouseLeave(idx) }}
      className={className()}
    >
      {columns.map( (c, ci) =>
        <Cell key={ci} value={record[c.attribute]}/>
      )}
    </Table.Row>

  )

}

Row.propTypes = {
  record: PropTypes.object.isRequired,
  columns: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    attribute: PropTypes.string.isRequired,
  })).isRequired,
  idx: PropTypes.number.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  hovered: PropTypes.number.isRequired
}


export default Row;