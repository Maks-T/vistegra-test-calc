import React from 'react';
import './results.style.css';

const Results = (props) => (
  <div className="results">
    <h3 className="results__title">Результаты расчета</h3>
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
          <tr>
            <td>Лист-12 0.5 ширина 0.5м</td>
            <td>м2</td>
            <td>10</td>
            <td>220</td>
          </tr>
          <tr>
            <td>Труба 20х20</td>
            <td>мп</td>
            <td>50</td>
            <td>900</td>
          </tr>
          <tr>
            <td>Саморез</td>
            <td>шт</td>
            <td>60</td>
            <td>66</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default Results;
