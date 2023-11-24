//* IMPORTS:
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import React from 'react';
import './index.css';

//* Exported Variables: 
export const BASEURL = 'https://fsa-puppy-bowl.herokuapp.com/api/2308-FTB-ET-WEB-PT/';
export const GET = 'players';
export const TEAM = 'teams';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
)
