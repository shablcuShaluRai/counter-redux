import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './component/counter'
import rootReducer from './reducers'
import { createStore } from 'redux'

const store = createStore(rootReducer);



const render = () => ReactDOM.render(
  <Counter
  value = {store.getState()}
  onIncrement = {() => store.dispatch({type: 'Increment'})}
  onDecrement = {() => store.dispatch({type: 'Decrement'})}
  />,
  document.getElementById('root'));

  render()

  store.subscribe(render);
