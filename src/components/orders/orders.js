import React, { useContext } from 'react';
import { StateContext } from '../reducerProvider/reducerProvider';

import './orders.style.css';
import Order from '../order/order';

const Orders = (props) => {
  const { state, dispatch } = useContext(StateContext);

  return (
    <>
      {!!state.orders.length && (
        <div className="orders">
          <h3 className="orders__title">Заказы</h3>
          <div className="orders__body">
            {state.orders.map((order) => (
              <Order order={order} dispatch={dispatch} key={order.id} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Orders;
