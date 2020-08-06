import React, { useState } from 'react';
import './App.css';
import Parent from './Parent';
import ConterContext from './CounterContext';
import CounterReduce from './CounterReducer';

function App() {

  let counter = useState(1);
  return (
    <div >
      <ConterContext.Provider value={counter}>
        <Parent />
        </ConterContext.Provider>


    </div>
    
  );
}

export default App;
