import React from 'react';
import ReactDOM from 'react-dom';
import Laser from './Laser';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Laser />, div);
});
