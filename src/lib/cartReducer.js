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

function CustomCartReduser(initialState, key) {
  const [state, dispatch] = useReducer(reducer, initialState, initial =>
    initialFunc(initial, key)
  );

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, dispatch];
}

// Cart items reducer.
export const useCartReducer = () => {
  return CustomCartReduser([], 'cartProducts');
};
