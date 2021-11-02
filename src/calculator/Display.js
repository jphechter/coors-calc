import { useState } from 'react';
import './Display.css';

function Display(props) {
  const [multiplierValue, setMultValue] = useState(1)

  function selectMult(event) {
    setMultValue(event.target.value);
    props.multiplier(event.target.value);
  }

  return (
    <div className="display" onClick={() => props.clear()}>
      <select
        className="multiplier"
        onChange={(e) => selectMult(e)}
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
      <span>{props.abv}</span>% ABV
    </div>
  )
}

export default Display;