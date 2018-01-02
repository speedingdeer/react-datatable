import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import Measure from 'react-measure'

import Header from './Header';
import Row from './Row';
import FixedHeader from './FixedHeader';
import FixedColumn from './FixedColumn';

import './DataTable.css';

const HOVER_OUT = -1;

class DataTable extends Component {

  constructor(props) {
    super(props);

    this.state = {
      columns_sizes: {}, // all columns sizes are initally unknown
      table_size: null, // unknown
      rect: null, // uknown
      rect_inner: null, // uknown
      hovered: HOVER_OUT // the indexed of hovered row - unknown by default
    };

    this.onColumnResize = this.onColumnResize.bind(this);
    this.onResize = this.onResize.bind(this);
    this.onRowEnter = this.onRowEnter.bind(this);
    this.onRowLeave = this.onRowLeave.bind(this);

  }

  rowClassName(idx) {
    if(idx === this.state.hovered) { return 'hovered'; }
  }

  fixed() {
    // render when all sizes received
    if(this.props.columns && this.state.columns_sizes && 
      this.props.columns.length === Object.keys(this.state.columns_sizes).length &&
      this.state.table_size && this.state.table_size && this.state.rect &&this.state.rect_inner) {

        return (
          <div>
            <FixedHeader {...this.state} {...this.props}/>
            {/* render the fixed column only if needed */}
            {this.state.rect.x !== this.state.rect_inner.x &&
              <FixedColumn {...this.state} {...this.props} onRowEnter={this.onRowEnter} onRowLeave={this.onRowLeave}/>
            }
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
                      <Row key={di}
                        record={d} columns={this.props.columns} idx={di}
                        onMouseEnter={this.onRowEnter}
                        onMouseLeave={this.onRowLeave}
                        hovered={this.state.hovered} />
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

  onRowEnter(idx) {
    this.setState(Object.assign({}, this.state, { hovered: idx }));
  }

  onRowLeave(idx) {
    this.setState(Object.assign({}, this.state, { hovered: HOVER_OUT }));
  }

  onColumnResize(data) {
    this.setState(
      Object.assign({}, this.state, {
        columns_sizes: {
          ...this.state.columns_sizes,
          ...data
        }
      })
    )
  }

  componentDidMount() {
      window.addEventListener('scroll', this.onScroll.bind(this));
      this.elem.addEventListener('scroll', this.onScroll.bind(this));
      this.onScroll()
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll.bind(this));
      this.elem.removeEventListener('scroll', this.onScroll.bind(this));
  }

  onScroll(evt) {
    if(!this.elem || !this.table) return; // make sure it's initialized first
    let rect = this.elem.getBoundingClientRect();
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