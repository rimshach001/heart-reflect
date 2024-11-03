// Import necessary libraries
import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18
import App from './App'; // Import the main App component
import './index.css'; // Import any global CSS styles

// Create a root element to render the app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component within the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
