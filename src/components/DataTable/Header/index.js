import React from 'react';
import PropTypes from 'prop-types'

import { Table } from 'semantic-ui-react'

// import './Header.css'; nth yet

const Header = ({columns}) => (

  <Table.Header>
    <Table.Row>
      {columns.map( (c, i) =>
        <Table.HeaderCell key={i}>{c.label}</Table.HeaderCell>
      )}
    </Table.Row>
  </Table.Header>

)

Header.propTypes = {
  // this check is redundant, it's OK to double check the PropTypes but is shouldn't by just copy pasted
  columns: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    attribute: PropTypes.string.isRequired
  })).isRequired,

}

export default Header;