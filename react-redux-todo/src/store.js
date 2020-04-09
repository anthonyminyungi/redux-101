import { createAction, createReducer, configureStore } from '@reduxjs/toolkit';

const addToDo = createAction('ADD'); // composed of type, payload (it is an convention)
const deleteToDo = createAction('DELETE');

// enhancement : use local storage to save state on the browser
// using create reducer in redux toolkit, we "can mutate" the state
// and also can "return new state"
const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    // no return : related to immer
    state.push({ text: action.payload, id: Date.now() }); // push doesn't return state, just mutating.
  },
  [deleteToDo]: (state, action) =>
    state.filter((toDo) => toDo.id !== action.payload), // filter is returning state(new array).
});

const store = configureStore({ reducer });

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
