import React from 'react';
import ReactDOM from 'react-dom/client'; // Use ReactDOM.createRoot
import App from './App';
import { Provider } from 'react-redux';  // Provider to give Redux store access
import store from './Redux/Store';       // Correctly import the store
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css';

const GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID'; // Replace with your actual client ID

const root = ReactDOM.createRoot(document.getElementById('root')); // Updated for React 18+
root.render(
  <React.StrictMode>
    <Provider store={store}>  {/* Make sure to use lowercase store here */}
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <App />
      </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>
);
