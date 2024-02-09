import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Teste from './pages/teste';
import About from './pages/about';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <Teste/> */}
    <About/>
  </React.StrictMode>
);
