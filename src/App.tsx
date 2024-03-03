import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyles from "./styles/GlobalStyles";
import About from './pages/user-pages/about';
import Home from './pages/user-pages/home';
import Events from './pages/user-pages/events';
import EventsInfo from './pages/user-pages/event-info';
import ActivityInfo from './pages/user-pages/activity-info';
import LoginAdmin from './pages/admin-pages/login';
import EventsAdmin from './pages/admin-pages/eventos';
import ActivitiesAdmin from "./pages/admin-pages/atividades";
import CertificatesAdmin from "./pages/admin-pages/certificados";
import CreateEventsAdmin from "./pages/admin-pages/criar-eventos";
import CreateActivitiesAdmin from "./pages/admin-pages/create-activities";
import CreateCertificateAdmin from "./pages/admin-pages/create-certificate";
function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyles/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/events" element={<Events/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/events/info/event" element={<EventsInfo/>} />
          <Route path="/events/info/activity" element={<ActivityInfo/>} />
          <Route path="/admin/login" element={<LoginAdmin/>} />
          <Route path="/admin/events" element={<EventsAdmin/>} />
          <Route path="/admin/activities" element={<ActivitiesAdmin/>} />
          <Route path="/admin/certificates" element={<CertificatesAdmin/>} />
          <Route path="/admin/create/event" element={<CreateEventsAdmin/>} />
          <Route path="/admin/create/activity" element={<CreateActivitiesAdmin/>} />
          <Route path="/admin/create/certificate" element={<CreateCertificateAdmin/>} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;