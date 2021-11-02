import { useState } from 'react';
import './Display.css';

function Display(props) {

  return (
    <div className="display" onClick={() => props.clear()}>
      <span>{props.abv}</span>% ABV
    </div>
  )
}

export default Display;