import React from 'react';
import ReactDOM from 'react-dom';
import Header from './index';

it('renders without crashing', () => {
  const div = document.createElement('table');
  ReactDOM.render(<Header columns={[]}/>, div);
});
