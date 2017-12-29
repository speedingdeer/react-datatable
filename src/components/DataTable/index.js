import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import Measure from 'react-measure'

import Header from './Header';
import Cell from './Cell';
import FixedHeader from './FixedHeader';
import FixedColumn from './FixedColumn';

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

  fixed() {
    // render when all sizes optained
    if(this.props.columns && this.state.colums_sizes && 
      this.props.columns.length === Object.keys(this.state.colums_sizes).length &&
      this.state.table_size && this.state.table_size && this.state.rect_inner) {
      // It might be better to actually pass the whole state if it actually passes all values, it depends on the convention I think
        return (
          <div>
            <FixedHeader columns={this.props.columns} columns_sizes={this.state.colums_sizes} table_size={this.state.table_size} rect={this.state.rect} rect_inner={this.state.rect_inner}/>
            <FixedColumn columns={this.props.columns} data={this.props.data} columns_sizes={this.state.colums_sizes} table_size={this.state.table_size} rect={this.state.rect} rect_inner={this.state.rect_inner}/>
          </div>
        )
    }
  }

  render() {
    return (
      <div className='data-table' ref={(c) => this.elem = c}>
        {this.fixed()}
        {/* We need to know the table width otherwise can't set the fixed width for table */}
        <Measure bounds onResize={this.onResize}>
          {({ measureRef }) =>

            <div ref={measureRef}>
          {/** Note:
               when try to use 
               ref={(c) => {this.table = c; measureRef(c) }}
               it loops the call forever must be some library bug or hitting a weird edge case
          */}
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
    console.log(rect)
    console.log(rect_inner)
    let rect_inner = this.table.getBoundingClientRect();
    this.setState(Object.assign({}, this.state, { rect, rect_inner }));
    // the computed difference between y and top is the translateY for a fixed header and the first column
    // the computed difference between x and left is the theslateX for a fixed table header and the first column
  }

}

DataTable.propTypes = {
  // @TODO defined then as shape and require them here (make shape.js within DataTable component)
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