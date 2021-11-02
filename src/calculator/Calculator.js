import './Calculator.css';

import { useState } from "react";
import Display from './Display';

function Calculator(props) {

  const [abv, setABV] = useState('')
  const [containsDecimal, setCD] = useState(false)
  const [multiplierValue, setMultValue] = useState(1)

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
    props.abv(abv);
    props.multiplier(multiplierValue);
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
            <div className="accessory-button">
              <select
                className="multiplier"
                onChange={(e) => setMultValue(e.target.value)}
                value={multiplierValue}
              >
                <option value={1}>1x</option>
                <option value={2}>2x</option>
                <option value={3}>3x</option>
                <option value={4}>4x</option>
                <option value={5}>5x</option>
                <option value={6}>6x</option>
                <option value={7}>7x</option>
                <option value={8}>8x</option>
                <option value={9}>9x</option>
                <option value={10}>10x</option>
                <option value={11}>11x</option>
                <option value={12}>12x</option>
              </select>
            </div>
            <button className="accessory-button inactive"></button>
            <button onClick={() => clear()} className="accessory-button">CE</button>
          </div>
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
  