import { createStore } from 'redux';
import { createAction } from '@reduxjs/toolkit';

const addToDo = createAction('ADD'); // composed of type, payload (it is an convention)
const deleteToDo = createAction('DELETE');

// enhancement : use local storage to save state on the browser
const reducer = (state = [], action) => {
  switch (action.type) {
    case addToDo.type:
      return [{ text: action.payload, id: Date.now() }, ...state];
    case deleteToDo.type:
      return state.filter((toDo) => toDo.id !== action.payload);
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
