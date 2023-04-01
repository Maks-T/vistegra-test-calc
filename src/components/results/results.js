import React, { useEffect, useState } from 'react';
import './results.style.css';

const Results = (props) => {
  const { result } = props;

  console.log(result);
  return (
    <div className="results">
      <h3 className="results__title">Результаты расчета</h3>
      {result && (
        <div className="results__body">
          <table>
            <thead>
              <tr>
                <th>Наименование</th>
                <th>ед.</th>
                <th>кол-во</th>
                <th>сумма</th>
              </tr>
            </thead>
            <tbody>
              {result.rows.map((row) => {
                const { name, unit, quantity, sum } = row;
                return (
                  <tr>
                    <td>{name}</td>
                    <td>{unit}</td>
                    <td>{quantity}</td>
                    <td>{sum}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <p className="results__cell">{`Размер ячейки: ${result.cell}`}</p>
          <p className="results__summary">{`Итого: ${result.sum} руб.`}</p>
        </div>
      )}
    </div>
  );
};

export default Results;
