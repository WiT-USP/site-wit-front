import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import GlobalStyles from "./styles/GlobalStyles";
import About from './pages/user-pages/about';
import Home from './pages/user-pages/home';
import Events from './pages/user-pages/events';
import EventsInfo from './pages/user-pages/event-info';
import EventsAdmin from './pages/admin-pages/eventos';
import ActivitiesAdmin from "./pages/admin-pages/atividades";
import CertificatesAdmin from "./pages/admin-pages/certificados";
import Teste from "./pages/admin-pages/teste";

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyles/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/eventos" element={<Events/>} />
          <Route path="/eventos-info" element={<EventsInfo/>} />
          <Route path="/eventos-admin" element={<EventsAdmin/>} />
          <Route path="/atividades-admin" element={<ActivitiesAdmin/>} />
          <Route path="/certificados-admin" element={<CertificatesAdmin/>} />
          <Route path="/teste" element={<Teste/>} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
