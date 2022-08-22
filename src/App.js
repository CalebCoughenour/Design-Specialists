import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { TopNav } from "./components";
import Home from './pages/HomePage/Home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
      <Router>
        <TopNav />
        <Routes>
          <Route path='/' exact element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
