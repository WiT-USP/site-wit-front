import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ActivitiesAdmin from "./pages/admin-pages/atividades";
import CertificatesAdmin from "./pages/admin-pages/certificados";
import CreateActivitiesAdmin from "./pages/admin-pages/create-activities";
import CreateCertificateAdmin from "./pages/admin-pages/create-certificate";
import CreateEventsAdmin from "./pages/admin-pages/criar-eventos";
import EditActivitiesAdmin from "./pages/admin-pages/editar-atividades";
import EditEventsAdmin from "./pages/admin-pages/editar-eventos";
import EventsAdmin from "./pages/admin-pages/eventos";
import LoginAdmin from "./pages/admin-pages/login";
import About from "./pages/user-pages/about";
import ActivityInfo from "./pages/user-pages/activity-info";
import EventInfo from "./pages/user-pages/event-info";
import Events from "./pages/user-pages/events";
import Home from "./pages/user-pages/home";
import GlobalStyles from "./styles/GlobalStyles";
function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/events/info/:eventId" element={<EventInfo />} />
          <Route
            path="/events/info/:eventId/activities/:activityId"
            element={<ActivityInfo />}
          />
          <Route path="/admin/login" element={<LoginAdmin />} />
          <Route path="/admin/events" element={<EventsAdmin />} />
          <Route path="/admin/activities" element={<ActivitiesAdmin />} />
          <Route path="/admin/certificates" element={<CertificatesAdmin />} />
          <Route path="/admin/create/event" element={<CreateEventsAdmin />} />
          <Route path="/admin/edit/event/:eventId" element={<EditEventsAdmin/>} />
          <Route path="/admin/edit/activity/:activityId" element={<EditActivitiesAdmin/>} />
          <Route
            path="/admin/create/activity"
            element={<CreateActivitiesAdmin />}
          />
          <Route
            path="/admin/create/certificate"
            element={<CreateCertificateAdmin />}
          />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
