import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import GlobalStyles from "./styles/GlobalStyles";
import Teste from './pages/teste';
import About from './pages/about';
import Home from './pages/home';
import Events from './pages/events';
import EventsInfo from './pages/event-info';

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyles/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/eventos" element={<Events/>} />
          <Route path="/eventos-info" element={<EventsInfo/>} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
