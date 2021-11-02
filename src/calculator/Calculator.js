import './Calculator.css';

import { useState } from "react";
import Display from './Display';

function Calculator(props) {

  const [abv, setABV] = useState('')
  const [containsDecimal, setCD] = useState(false)

  function display(value) {
    if(value === ".") {
      setCD(true);
      if(abv === "") {
        value = "0.";
      }
    }
    setABV(`${abv}${value}`);
  }
  
  function clear() {
    setABV('');
    setCD(false);
  }

  function calculate() {
    clear();
    props.abv(abv);
  }

    return (
      <div className="calculator">
        <Display
          abv={abv}
          clear={() => clear()}
          multiplier={(value) => props.multiplier(value)}
        />
        <div className="buttons">
          <div className="button-row">
            <button onClick={() => display('7')}>7</button>
            <button onClick={() => display('8')}>8</button>
            <button onClick={() => display('9')}>9</button>
          </div>
          <div className="button-row">
            <button onClick={() => display('4')}>4</button>
            <button onClick={() => display('5')}>5</button>
            <button onClick={() => display('6')}>6</button>
          </div>
          <div className="button-row">
            <button onClick={() => display('1')}>1</button>
            <button onClick={() => display('2')}>2</button>
            <button onClick={() => display('3')}>3</button>
          </div>
          <div className="button-row">
            <button onClick={() => display('0')}>0</button>
            <button onClick={() => display('.')} disabled={containsDecimal}>.</button> 
            <button onClick={() => calculate()} className="equal">=</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Calculator;
  