import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { TransactionProvider } from './context/TransactionContext';
import App from './App'

ReactDOM.render(
  <TransactionProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </TransactionProvider>,
  document.getElementById('root')
);
