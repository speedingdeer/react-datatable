import React from 'react';
import ReactDOM from 'react-dom';
import DataTable from './index';
import { mount } from 'enzyme';
import { fakeData } from '../../util';

let data = fakeData();


describe('The DataTable component', () => {

    let data_table;

    let state_completed = { 
      columns_sizes: {
        field_name:  { entry: { top: 14, right: 300, bottom: 33, left: 1, width: 299, height: 19 } },
        cultivation_id: { entry: { top: 14, right: 430, bottom: 33, left: 300, width: 130, height: 19 }, },
        company_name: { entry:  { top: 14, right: 841, bottom: 33, left: 430, width: 411, height: 19 }, },
        area_in_hectares: { entry: { top: 14, right: 947, bottom: 33, left: 841, width: 106, height: 19 }, },
        active: { entry: { top: 14, right: 1067, bottom: 33, left: 947, width: 120, height: 19 } },
        crop_name: { entry: { top: 14, right: 1343, bottom: 33, left: 1067, width: 276, height: 19 } },
        harvest_year: { entry: { top: 14, right: 1439, bottom: 33, left: 1343, width: 96, height: 19 } },
      },
      table_size: { entry: { top: 0, right: 1440, bottom: 4703, left: 0, width: 1440, height: 4703 } },
      rect: { bottom: 145, height: 2, left: 184.5, right: 1255.5, top: 143, width: 1071, x: 184.5, y: 143 },
      rect_inner: { bottom: 145, height: 2, left: 184.5, right: 1255.5, top: 143, width: 1071, x: 184.5, y: 143 },
      hovered: -1
    }

    beforeEach(() => {
        data_table = mount(<DataTable {...data}/>);
    });

    it('The DataTable should NOT render the FixedHeader if NOT size data provided.', () => {
        expect(data_table.find('.fixed-header').length).toBe(0)
    });
    
    it ('The DataTable should render the FixedHeader if size data provided.', () => {
      data_table.setState(state_completed);
      expect(data_table.find('.fixed-header').length).toBe(1)
    });

    it ('The DataTable should render not render the fixed column if not scrolled vertically.', () => {
      data_table.setState(state_completed);
      expect(data_table.find('.fixed-column').length).toBe(0)
    });

    it ('The DataTable should render not render the fixed column if scrolled vertically.', () => {
      let inner = Object.assign({}, state_completed.rect_inner) // clone
      inner.x -= 10; // scrolled
      data_table.setState(Object.assign({}, state_completed, { rect_inner: inner }));
      expect(data_table.find('.fixed-column').length).toBe(1)
    });

})
