import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { TopNav, BackToTopButton, Footer, GoToTop } from "./components";
import Home from './pages/HomePage/Home';
import Sets from './pages/Sets/Sets';
import Designs from './pages/Designs/Designs';
import About from './pages/About/About';
import Accessories from './pages/Accessories/Accessories';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
      <Router>
        <TopNav />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/designs' element={<Designs />} />
          <Route path='/sets' element={<Sets />} />
          <Route path='/accessories' element={<Accessories />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <BackToTopButton />
        <Footer />
        <GoToTop />
      </Router>
    </>
  );
}

export default App;
