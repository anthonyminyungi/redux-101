import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

// reducer:: function returns data in your application (only it could modify state)
const countModifier = (count = 0) => {
  // make default state initially
  console.log(count);
  return count;
};

const countStore = createStore(countModifier);
