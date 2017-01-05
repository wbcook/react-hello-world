import React from 'react';
import ReactDOM from 'react-dom';
import AppIntro from './AppIntro';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppIntro />, div);
});
