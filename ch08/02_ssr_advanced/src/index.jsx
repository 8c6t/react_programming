import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const initialData = window.__INITIAL_DATA__;
ReactDOM.render(<App page={initialData.page} />, document.getElementById('root'));
