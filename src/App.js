import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/HomePage/Home';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
