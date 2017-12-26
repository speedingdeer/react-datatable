import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';

import Header from './Header';
import FixedHeader from './FixedHeader';
import Cell from './Cell';

import './DataTable.css';

class DataTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      colums_sizes: {}
    };
    this.onColumnResize = this.onColumnResize.bind(this);
  }

  render() {
    return (
      <div className='data-table' ref={(c) => this.elem = c}>
        <FixedHeader columns={this.props.columns} columns_sizes={this.state.colums_sizes}/>
        <Table striped unstackable>
          <Header columns={this.props.columns} onResize={this.onColumnResize}/>
          <Table.Body>
            {this.props.data.map( (d, di) =>
              <Table.Row key={di}>
                {this.props.columns.map( (c, ci) =>
                  <Cell key={ci} value={d[c.attribute]}/>
                )}
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </div>
    );
  }

  onColumnResize(data) {
    this.setState(
      Object.assign({}, this.state, {
        colums_sizes: {
          ...this.state.colums_sizes,
          ...data
        }
      })
    )
  }

  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll(event) {
    console.log(this.elem.getBoundingClientRect());
  }

}

DataTable.propTypes = {
  // label and attribute are required
  columns: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    attribute: PropTypes.string.isRequired
  })).isRequired,
  // data can be any array of objects
  // it's fine if they are empty (will appear as empty row, but they can't be null or undefiend etc.)
  data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default DataTable;