import React from 'react';
import ReactDOM from 'react-dom';
import DataTable from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DataTable columns={[]} data={[]}/>, div);
});
