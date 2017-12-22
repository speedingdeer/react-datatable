import React from 'react';
import ReactDOM from 'react-dom';
import Cell from './index';

it('renders without crashing', () => {
  const div = document.createElement('tr');
  ReactDOM.render(<Cell/>, div);
});
