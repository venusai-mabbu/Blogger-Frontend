import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserContextProvider } from './UserContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <UserContextProvider>#f0eded
    <div style={{ backgroundColor: '#ffffff',minHeight:'100vh'}}>
      <App />
    </div>

);

