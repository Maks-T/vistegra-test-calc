import React, { useState } from 'react';
import Parametrs from '../parametrs/parametrs';
import Results from '../results/results';
import './calculator.style.css';

const Calculator = (props) => {
  const [result, setResult] = useState();

  console.log('calc', result);

  return (
    <div className="calculator">
      <h2 className="calculator__title">Калькулятор расчета покрытия</h2>
      <div className="calculator__body">
        <div className="calculator__body-top">
          <Parametrs setResult={setResult} />
          <Results result={result} />
        </div>
        <div className="calculator__body-bottom"></div>
      </div>
    </div>
  );
};

export default Calculator;
