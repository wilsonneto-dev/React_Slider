import React from 'react';

import Slider from '../components/Slider';

import '../assets/styles/global.scss'

const items = [
  { title: '1' },
  { title: '2'},
  { title: '3'},
  { title: '4'},
  { title: '5'},
  { title: '6'},
  { title: '7'}
];

function App() {
  return (
    <div className="App">
      <Slider title="testando" number="5" items={items} />
    </div>
  );
}

export default App;
