import React from 'react';
import Bookgaenrate from './pages/Books/Bookgaenrate';
import Bookgaenrate2 from './pages/Books/book2';
import Bookgaenrate3 from './pages/Books/books3';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sections from './pages/Books/sections';
import Footer from './Layput/footer'
import Navbar from './Layput/navbar'
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* <BookDescriptionGenerator /> */}
          <Route exact path="/" element={<Sections />} />
          <Route path="/Bookgaenrate" element={<Bookgaenrate />} />
          <Route path="/Bookgaenrate2" element={<Bookgaenrate2 />} />
          <Route path="/Bookgaenrate3" element={<Bookgaenrate3 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
