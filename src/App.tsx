import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer/Footer';
import Home from './pages/Home';
import History from './pages/about/History';
import VisionMission from './pages/about/VisionMission';
import Administration from './pages/about/Administration';
import Faculty from './pages/about/Faculty';
import Courses from './pages/academics/Courses';
import Admissions from './pages/academics/Admissions';
import FeeStructure from './pages/academics/FeeStructure';
import AcademicCalendar from './pages/academics/AcademicCalendar';
import HolidayCalendar from './pages/academics/HolidayCalendar';
import Library from './pages/facilities/Library';
import Laboratories from './pages/facilities/Laboratories';
import Canteen from './pages/facilities/Canteen';
import Events from './pages/Events';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/history" element={<History />} />
            <Route path="/about/vision-mission" element={<VisionMission />} />
            <Route path="/about/administration" element={<Administration />} />
            <Route path="/about/faculty" element={<Faculty />} />
            <Route path="/academics/courses" element={<Courses />} />
            <Route path="/academics/admissions" element={<Admissions />} />
            <Route path="/academics/fees" element={<FeeStructure />} />
            <Route path="/academics/calendar" element={<AcademicCalendar />} />
            <Route path="/academics/holidays" element={<HolidayCalendar />} />
            <Route path="/facilities/library" element={<Library />} />
            <Route path="/facilities/labs" element={<Laboratories />} />
            <Route path="/facilities/canteen" element={<Canteen />} />
            <Route path="/events" element={<Events />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;