import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {createStore} from "redux"
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage'
import reducerB from './reducers/ReducerB';
const persistConfig = {
  key: 'root',
  storage,
} 
const persistedReducer = persistReducer(persistConfig, reducerB)
let store = createStore(persistedReducer)
let persistor = persistStore(store)

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
