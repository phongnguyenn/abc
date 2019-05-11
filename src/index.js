import React from 'react';
import { render } from 'react-dom';
import GridExampleStretched from './gridExampleStretched';
import './test.css';

const App = () => (
  <div className='mainAppHolderStyle'>
    <GridExampleStretched />
  </div>
);

render(<App />, document.getElementById('root'));
