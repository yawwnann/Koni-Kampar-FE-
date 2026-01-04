import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/ui/Navbar.jsx";
import Footer from "./components/ui/Footer.jsx";
import Beranda from "./pages/Beranda/Beranda.jsx";
import About from "./pages/About/About.jsx";
import Gallery from "./pages/Gallery/gallery.jsx";
import News from "./pages/News/News.jsx";
import NewsDetail from "./pages/News/NewsDetail.jsx";
import Event from "./pages/Event/Event.jsx";
import EventDetail from "./pages/Event/EventDetail.jsx";
import SportBranch from "./pages/SportBranch/SportBranch.jsx";
import SportBranchDetail from "./pages/SportBranch/SportBranchDetail.jsx";
import Facilities from "./pages/Facilities/Facilities.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Members from "./pages/Members/Members.jsx";
import Structure from "./pages/Members/Structure.jsx";
import Bio from "./pages/Members/Bio.jsx";
import Login from "./pages/Auth/Login.jsx";
import Register from "./pages/Auth/Register.jsx";

function AppContent() {
  const location = useLocation();
  const authPages = ["/login", "/register"];
  const isAuthPage = authPages.includes(location.pathname);

  return (
    <>
      {!isAuthPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/tentang" element={<About />} />
        <Route path="/galeri" element={<Gallery />} />
        <Route path="/berita" element={<News />} />
        <Route path="/berita/:id" element={<NewsDetail />} />
        <Route path="/event" element={<Event />} />
        <Route path="/event/:id" element={<EventDetail />} />
        <Route path="/cabor" element={<SportBranch />} />
        <Route path="/cabor/:id" element={<SportBranchDetail />} />
        <Route path="/fasilitas" element={<Facilities />} />
        <Route path="/anggota" element={<Members />} />
        <Route path="/anggota/struktur" element={<Structure />} />
        <Route path="/anggota/bio" element={<Bio />} />
        <Route path="/kontak" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {!isAuthPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
