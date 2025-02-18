import { useState } from 'react';
import './App.css';
import Appp from './components/Appp';  // Import your Appp component
import Welcome from './components/Welcome';  // Import your Welcome component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import Router, Routes, Route

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>  {/* Wrap Routes inside Router */}
      <Routes>
        <Route path="/" element={<Appp />} />  {/* Home route to Appp */}
        <Route path="/welcome" element={<Welcome />} />  {/* Welcome route */}
      </Routes>
    </Router>
  );
}

export default App;
