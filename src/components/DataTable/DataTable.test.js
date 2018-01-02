import React from 'react';
import ReactDOM from 'react-dom';
import DataTable from './index';

import {fakeData} from '../../util';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DataTable {...fakeData()}/>, div);
});
