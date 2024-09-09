import React from 'react';
import ReactDOM from 'react-dom/client'; // Update the import
import App from './App';

import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css'; // Ensure TailwindCSS is imported here
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faPlane, faSearch, faEnvelope, faFile, faBookmark, faUser, faLifeRing } from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faPlane, faSearch, faEnvelope, faFile, faBookmark, faUser, faLifeRing);

const GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID'; // Replace with your actual client ID

const root = ReactDOM.createRoot(document.getElementById('root')); // Update this line
root.render(
  <React.StrictMode>
  <App />
  </React.StrictMode>
);
