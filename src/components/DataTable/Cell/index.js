import React from 'react';
import { Table, Checkbox } from 'semantic-ui-react';

// import './Cell.css'; nth yet


function booleanCell(value) {
  return (
    <Checkbox toggle checked={value}/>
  )
}

const Cell = ({value}) => {
  let formatted = value;
  if(typeof(value) === 'boolean'){
    formatted = booleanCell(value)
  }
  return (
    <Table.Cell> {formatted} </Table.Cell>
  )

}


export default Cell;