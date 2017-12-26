import React from 'react';
import PropTypes from 'prop-types'
import Measure from 'react-measure'
import { Table } from 'semantic-ui-react'

import './Header.css'

const Header = ({columns, onResize}) => (

  <Table.Header className='header'>
    <Table.Row>
      {columns.map( (c, i) =>
        <Table.HeaderCell key={i}>
          <Measure bounds onResize={(contentRect) => { onResize({[c.attribute]: contentRect}) }}>
            {({ measureRef }) =>
              <div ref={measureRef}> {c.label} </div>
            }
          </Measure>
        </Table.HeaderCell>
      )}
    </Table.Row>
  </Table.Header>

)

Header.propTypes = {
  // this check is redundant, it's OK to double check the PropTypes but is shouldn't by just copy pasted
  columns: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    attribute: PropTypes.string.isRequired,
  })).isRequired,
  onResize: PropTypes.func.isRequired

}

export default Header;