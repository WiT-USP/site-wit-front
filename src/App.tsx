import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import GlobalStyles from "./styles/GlobalStyles";
import Teste from './pages/teste';
import About from './pages/about';
import Home from './pages/home';
import Events from './pages/events';

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyles/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/eventos" element={<Events/>} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
