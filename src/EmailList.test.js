import React from 'react';
import ReactDOM from 'react-dom';
import EmailList from './EmailList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EmailList />, div);
});
