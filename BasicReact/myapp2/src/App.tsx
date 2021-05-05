import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { CountDisplayEven, CountDisplayOdd } from './countDisplay';


function App() {
  console.log('app was called')
  
  const [ count, setCount ] = useState(0)
  
  const handleCountClick = () => {
    console.log('handleCountClick was called', count)
    setCount(count + 1)
  }

  const handleResetClick = () => {
    console.log('handleResetClick was called', count)
    setCount(0)
  }

  return (
    <div className="App">
     <button onClick={handleCountClick}>Click me</button>
     { count % 2
      ? <CountDisplayOdd countForDisplay={count}></CountDisplayOdd>
      : <CountDisplayEven countForDisplay={count}></CountDisplayEven>
     }
     
     <button onClick={handleResetClick}>Reset</button>
    </div>
  );
}

export default App;
