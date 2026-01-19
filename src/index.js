import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Home from '../src/pages/Home.jsx';
import Footer from './components/Footer.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <>
    <Home />
    <Footer />
    </>
    
  </React.StrictMode>
);

reportWebVitals();
