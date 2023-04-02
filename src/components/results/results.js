import React, { useContext, useEffect, useState } from 'react';
import Drawing from '../drawing/drawing';
import ResultsTable from '../resultsTable/resultsTable';
import { StateContext } from './../reducerProvider/reducerProvider';
import './results.style.css';

const Results = (props) => {
  const { result } = props;
  const { dispatch } = useContext(StateContext);
  const [isCheckout, setIsCheckout] = useState(false);

  useEffect(() => {
    setIsCheckout(false);
  }, [result]);

  return (
    <div className="results">
      <h3 className="results__title">Результаты расчета</h3>
      {result && (
        <div className="results__body">
          <ResultsTable result={result} />
          <p className="results__cell">{`Размер ячейки: ${result.cell}`}</p>
          <p className="results__summary">{`Итого: ${result.sum} руб.`}</p>

          <Drawing drawData={result.draw} />
          {!isCheckout ? (
            <button
              className="btn"
              onClick={() => {
                result.id = new Date().getTime();
                dispatch({ type: 'ADD_PRODUCT_TO_CART', payload: result });
                setIsCheckout(true);
              }}
            >
              Заказать
            </button>
          ) : (
            <p className="results__checkout">Вы оформили заказ!</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Results;
