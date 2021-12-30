import React from 'react';
import {render} from 'react-dom';
import {App} from './components/App';



const appElm = document.getElementById('app');
render(<App />, appElm)

const initialObject = {
  name: "Anurag Panday",
  Address: "Becker street"
}

const newObject = {
  ...initialObject,
  addedValue: "it's a new value"
}

console.log(newObject);