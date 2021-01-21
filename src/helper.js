import { useReducer } from 'react';

const reducer = (prevState, action) => {
  let newState = [];

  switch (action.type) {
    case 'ADD':
      newState = [...prevState, action.name];
      break;
    case 'REMOVE':
      newState = prevState.filter(name => name !== action.name);
      break;
    default:
      newState = [...prevState];
  }

  return newState;
};

function useCustomReduser(initialState) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return [state, dispatch];
}

export const useFilterReducer = initialState => {
  return useCustomReduser(initialState);
};
