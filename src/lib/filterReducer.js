import { useReducer } from 'react';

const reducer = (prevState, action) => {
  let newState = [];

  switch (action.type) {
    case 'ADD':
      newState = { ...prevState, [action.id]: true };
      break;
    case 'REMOVE':
      newState = { ...prevState, [action.id]: false };
      break;
    default:
      newState = { ...prevState };
  }

  return newState;
};

function CustomFilterReduser(initialState) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return [state, dispatch];
}

// Filter option reducer.
export const useFilterReducer = initialState => {
  return CustomFilterReduser(initialState);
};
