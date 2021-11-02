import { useState } from 'react';
import './App.css';
import Calculator from './calculator/Calculator';
import Conversion from './Conversion';

function App() {

  const [abv, setABV] = useState('');
  const [multiplier, setMultValue] = useState(1)

  return (
    <div className="App">
      <h1>THE COORS CALC<sup>®</sup></h1>
      <Conversion
        abv={abv}
        multiplier={multiplier}
      />
      <Calculator
        abv={(abv) => setABV(abv)}
        multiplier={(mult) => setMultValue(mult)}
      />
    </div>
  );
}

export default App;
