import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './Layout/Layout'
import { Provider } from 'react-redux'
import { newStore } from '../src/Store'
import 'bootstrap/dist/css/bootstrap.min.css'

const store = newStore();

window.onload = () => {
  ReactDOM.render(
    <Provider store={store}>
        <Layout />
    </Provider>,
    document.querySelector('#app')
  );
};
