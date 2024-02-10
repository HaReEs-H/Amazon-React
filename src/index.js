import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import BasketProvider from './context/cartContext'
import reducer, { initialState } from './Reducers/cartReducer'

const el = document.getElementById('root')
const root = ReactDOM.createRoot(el)

root.render(
  <BasketProvider initialState={initialState} reducer={reducer}>
    <App />
  </BasketProvider>
)
