import './Conversion.css';

import React from 'react';

function Conversion(props) {

  if (props.value) {
    const calculationResult = (parseFloat(props.value)/4.2).toFixed(2);
    const canNumber = Math.round(parseFloat(calculationResult) + .49)
    const decimal = calculationResult.split(".")[1]
    const partial = decimal !== "00" ? decimal : "100";

    const lastCanStyle = {
      height: `${partial}px`,
    }
    
    var cans = [];
    for (var i = 1; i <= canNumber; i++) {
      cans.push(
        <div
        key={i}
        className={"can"}
        style={(i - canNumber) === 0 ? lastCanStyle : null}
        ></div>
        )
      }
      
      // 6pk, 16, 18, 30 etc.
    return (
      <div className={"conversion"}>
        <p>That's {calculationResult} Coors Lights!</p>
        <div className={"rack"}>
          {cans}
        </div>
      </div>
    );
  }
  else {
    return <div className={"conversion"}></div>
  }
}

export default Conversion;
