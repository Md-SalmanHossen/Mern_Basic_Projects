import React from 'react';
import ReactDOM from 'react-dom/client'; // Update this import
import './index.css'; // Import global styles, like Tailwind CSS
import App from './App'; // Import the main component

// Create a root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the main App component into the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
