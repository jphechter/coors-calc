import { useState } from 'react';
import { Helmet } from 'react-helmet';
import './App.css';
import Calculator from './Calculator';
import Conversion from './Conversion';

function App() {

  const [userInput, setInput] = useState('');

  return (
    <div className="App">
      {/* TODO: There's a better way to do this */}
      {window.location.host === "coorscalc.com" ?
      <Helmet>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-FRJPP2VX4L"></script>
        <script 
        dangerouslySetInnerHTML={`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-FRJPP2VX4L');`}
        />
      </Helmet> : null}
      <h1>THE COORS CALC<sup>®</sup></h1>
      <Conversion value={userInput}/>
      <Calculator input={(userInput) => setInput(userInput)}/>
    </div>
  );
}

export default App;
