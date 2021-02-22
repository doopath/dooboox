// React rofls
import React from 'react';
import ReactDOM from 'react-dom';

// Global CSS files
import './index.css';

// My local component functions
import App from './js/App'; 
import Main from './js/Main';

// ???
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
