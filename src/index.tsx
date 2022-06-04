import React from 'react';
// import ReactDOM from 'react-dom';
// import {createRoot} from 'react-dom/client';
import ReactDom from 'react-dom/client';
import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDom.createRoot(rootElement);
root.render(<App />);
