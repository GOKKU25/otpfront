import { useState } from 'react';
import './App.css';
import Appp from './components/Appp';  
import Welcome from './components/Welcome'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>  
      <Routes>
        <Route path="/" element={<Appp />} /> 
        <Route path="/welcome" element={<Welcome />} /> 
      </Routes>
    </Router>
  );
}

export default App;
