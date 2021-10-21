import { useState } from 'react';
import './App.css';
import Calculator from './Calculator';
import Conversion from './Conversion';

function App() {

  const [userInput, setInput] = useState('');

  return (
    <div className="App">
      <h1>THE COORS CALC<sup>®</sup></h1>
      <Conversion value={userInput}/>
      <Calculator input={(userInput) => setInput(userInput)}/>
    </div>
  );
}

export default App;
