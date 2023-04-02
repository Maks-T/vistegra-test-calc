import React from 'react';
import ResultsTable from '../resultsTable/resultsTable';
import './order.style.css';

const Order = (props) => {
  const { order, dispatch } = props;

  return (
    <div className="order">
      <h4 className="order__number">Номер заказа: {order.id}</h4>
      <ResultsTable result={order} />
      <p className="orders__cell">{`Размер ячейки: ${order.cell}`}</p>
      <p className="orders__summary">{`Итого: ${order.sum} руб.`} </p>
      <button
        className="btn"
        onClick={() =>
          dispatch({
            type: 'REMOVE_PRODUCT_IN_CART',
            payload: order,
          })
        }
      >
        Удалить
      </button>
    </div>
  );
};

export default Order;
