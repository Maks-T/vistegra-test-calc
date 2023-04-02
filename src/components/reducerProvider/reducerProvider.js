import React, { useReducer } from 'react';

export const StateContext = React.createContext();

const initialState = JSON.parse(localStorage.getItem('orders')) || {
  orders: [],
  total: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART':
      const findAddOrder = state.orders.find(
        (order) => order.id === action.payload.id
      );
      if (!findAddOrder) {
        state.orders = [...state.orders, action.payload];
        state.total += 1;
        localStorage.setItem('orders', JSON.stringify(state));
      }

      return { ...state };

    case 'REMOVE_PRODUCT_IN_CART':
      const findRemoveOrder = state.orders.find(
        (order) => order.id === action.payload.id
      );

      if (findRemoveOrder) {
        state.orders = state.orders.filter(
          (order) => order.id !== action.payload.id
        );

        state.total -= 1;

        localStorage.setItem('orders', JSON.stringify(state));
      }

      return { ...state };

    default:
      return { ...state };
  }
};

const ReducerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export default ReducerProvider;
