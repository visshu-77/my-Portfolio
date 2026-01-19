import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from '../src/pages/Home.jsx';

import Header from '../src/components/Header.jsx'
import About from './pages/About.jsx';
import Project from './pages/Project.jsx';
import Footer from './components/Footer.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <>
    <Home />
    <Footer />
    <About />
    <Project />
    </>
    
  </React.StrictMode>
);

reportWebVitals();
