import React from 'react'
import ReactDOM from 'react-dom'
import Component from './Counter/Component'
import { Provider } from 'react-redux'
import { newStore } from '../src/Store'

const store = newStore();

window.onload = () => {
  ReactDOM.render(
    <Provider store={store}>
        <Component />
    </Provider>,
    document.querySelector('#app')
  );
};
