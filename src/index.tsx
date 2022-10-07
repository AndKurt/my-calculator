import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { App } from './App'

const root = ReactDOM.createRoot(
  // eslint-disable-next-line prettier/prettier
  document.getElementById('root') as HTMLElement,
)
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)
