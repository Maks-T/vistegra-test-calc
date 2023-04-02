import React from 'react';
import './resultsTable.style.css';

const ResultsTable = (props) => {
  const { result } = props;

  return (
    <table className="results__table">
      <thead>
        <tr>
          <th>Наименование</th>
          <th>ед.</th>
          <th>кол-во</th>
          <th>сумма</th>
        </tr>
      </thead>
      <tbody>
        {result.rows.map((row, i) => {
          const { name, unit, quantity, sum } = row;
          return (
            <tr key={'row_' + i}>
              <td>{name}</td>
              <td>{unit}</td>
              <td>{quantity}</td>
              <td>{sum}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ResultsTable;
