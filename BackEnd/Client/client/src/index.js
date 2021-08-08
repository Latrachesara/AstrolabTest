import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserHistory} from "history";
import DataProvider from "./Redux/Store";
import axios from "axios";
axios.defaults.withCredentials = true;
const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
<DataProvider>
    <Router routes={App} history={history}>
      <Route path="/">
        <App />
      </Route>
    </Router>
    </DataProvider>
</React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();