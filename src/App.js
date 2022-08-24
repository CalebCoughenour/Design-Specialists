import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { TopNav, BackToTopButton } from "./components";
import Home from './pages/HomePage/Home';
import Designs from './pages/Designs/Designs';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
      <Router>
        <TopNav />
        <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/designs' exact element={<Designs />} />
        </Routes>
        <BackToTopButton />
      </Router>
    </>
  );
}

export default App;
