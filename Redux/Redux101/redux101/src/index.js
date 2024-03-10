import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//1. In order to wire up redux/react app, we need react-redux.
//we need the provider ReactComponent, to ve around everything!
import { Provider } from 'react-redux';
//2. Create the redux store, so that redux exists, and the provider has a store!
import { createStore } from 'redux';
//3. Reducers to populate the store
//3a. We always start with rootReducer
//4. Make indidivual reducers to hand to the reducers (3)
import rootReducer from './reducers/rootReducer';
//5. Create the store (2) by passing it the root rootReducers, which is made up of the reducers
const theStore = createStore(rootReducer);

//Provider is the glue between react and redux, Give it to store.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={theStore}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
