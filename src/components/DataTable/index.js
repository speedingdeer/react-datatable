import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import Measure from 'react-measure'

import Header from './Header';
import FixedHeader from './FixedHeader';
import Cell from './Cell';

import './DataTable.css';

class DataTable extends Component {

  constructor(props) {
    super(props);

    this.state = {
      colums_sizes: {}, // all column sizes are initally unknown
      table_size: null, // unknown
      rect: null, // uknown
      rect_inner: null // uknown
    };

    this.onColumnResize = this.onColumnResize.bind(this);
    this.onResize = this.onResize.bind(this);

  }

  render() {
    return (
      <div className='data-table' ref={(c) => this.elem = c}>
        {/* It might be better to actually pass the whole state if it actually passes all values, it depends on the convention I think*/}
        <FixedHeader columns={this.props.columns} columns_sizes={this.state.colums_sizes} table_size={this.state.table_size} rect={this.state.rect} rect_inner={this.state.rect_inner}/>
        {/* We need to know the table width otherwise can't set the fixed width for table */}

        <Measure bounds onResize={this.onResize}>
          {({ measureRef }) =>
            <div ref={measureRef}>
            <div ref={(c) => this.table = c}>
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
        </div>
          }
        </Measure>
      </div>
    );
  }

  onResize(data) {
    // This will actually trigger X times for X columns
    // @TODO: try to optmize it to change once on table resize or something like this
    this.setState(Object.assign({}, this.state, { table_size: data }));
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
      this.elem.addEventListener('scroll', this.handleScroll.bind(this));
      this.handleScroll()
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll.bind(this));
      this.elem.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll(evt) {
    let rect = this.elem.getBoundingClientRect();
    let rect_inner = this.table.getBoundingClientRect();
    this.setState(Object.assign({}, this.state, { rect, rect_inner }));
    // the computed difference between y and top is the translateY for a fixed header and the first column
    // the computed difference between x and left is the theslateX for a fixed table header and the first column
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