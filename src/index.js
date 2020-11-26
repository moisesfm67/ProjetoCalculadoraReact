import React from 'react';
import ReactDOM from 'react-dom';
import './calculadora.css';
import reportWebVitals from './reportWebVitals';
import Calculadora from './calculadora';
import 'bootstrap/dist/css/bootstrap.min.css';

/*ReactDOM.render(
  <React.StrictMode>
    <Calculadora />
  </React.StrictMode>,
  document.getElementById('root')
);*/

ReactDOM.render(<Calculadora />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
