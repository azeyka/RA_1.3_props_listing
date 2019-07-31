import React from 'react';
import './App.css';
import Listing from './components/Listing';

const DATA = require('./data/etsy.json')

function App() {
  return (
      <Listing items={DATA} />
  );
}

export default App;
