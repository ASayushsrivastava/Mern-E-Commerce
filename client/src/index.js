// Main entry point for the application which binds the react component to the DOM.

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import { AuthProvider } from './context/auth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <BrowserRouter>
          <App />
    </BrowserRouter>
  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// 1. Index.js is the entry point that sets up the React app and renders it to the DOM.
// 2. App.js is the root Component that manages the structure, components and funcitonality of the application.
// 3. They work together to deliver the application to the browser with index.js defining the app's content and behavior.

// Process Flow:
// step 1: index.js imports React and react DOM
// step 2: index.js imports App.js as root component
// step 3: index.js uses ReactDOM.render (or ReactDOM.createRoot) to render App.js into the DOM element with id="root"
// step 4: App.js defines the structure and renders additional components.