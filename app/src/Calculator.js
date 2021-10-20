import './Calculator.css';

import { useState } from "react";

function Calculator() {

  const [input, setInput] = useState('19.4')
  const [containsDecimal, setCD] = useState(false)

  function display(value) {
    if(value === ".") {
      setCD(true);
      if(input === "") {
        value = "0.";
      }
    }
    setInput(`${input}${value}`);
  }

  function calculate() {
    setInput('');
    setCD(false);
  }


    return (
      <div className="calculator">
        <div onClick={() => setInput('')} className="display">
          <span>{input}</span>
        </div>
        <div className="buttons">
          <div className="button-row">
            <button onClick={() => display('9')}>9</button>
            <button onClick={() => display('8')}>8</button>
            <button onClick={() => display('7')}>7</button>
          </div>
          <div className="button-row">
            <button onClick={() => display('6')}>6</button>
            <button onClick={() => display('5')}>5</button>
            <button onClick={() => display('4')}>4</button>
          </div>
          <div className="button-row">
            <button onClick={() => display('3')}>3</button>
            <button onClick={() => display('2')}>2</button>
            <button onClick={() => display('1')}>1</button>
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
  