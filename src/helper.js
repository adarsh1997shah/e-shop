import { useEffect, useReducer } from 'react';

const initialFunc = (initial, key) => {
  return sessionStorage.getItem(key)
    ? JSON.parse(sessionStorage.getItem(key))
    : initial;
};

const reducer = (prevState, action) => {
  let newState = [];

  switch (action.type) {
    case 'ADD':
      newState = [...prevState, action.id];
      break;
    case 'REMOVE':
      newState = prevState.filter(id => id !== action.id);
      break;
    default:
      newState = [...prevState];
  }

  return newState;
};

function CustomFilterReduser(initialState) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return [state, dispatch];
}

function CustomCartReduser(initialState, key) {
  const [state, dispatch] = useReducer(reducer, initialState, initial =>
    initialFunc(initial, key)
  );

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, dispatch];
}

// Filter option reducer.
export const useFilterReducer = initialState => {
  return CustomFilterReduser(initialState);
};

// Cart items reducer.
export const useCartReducer = () => {
  return CustomCartReduser([], 'cartProducts');
};

// For currency formatting.
export const getFormatCurrency = (currency, number) => {
  const formatCurrency = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency,
    currencyDisplay: 'narrowSymbol',
  }).format(number);

  return formatCurrency;
};
