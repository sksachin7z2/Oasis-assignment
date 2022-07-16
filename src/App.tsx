import React,{useEffect} from 'react';

import {BrowserRouter as Router,
  Routes,Route
  } from 'react-router-dom'
import Createform from './components/Createform';
import Formbody from './components/Formbody';
  import Landing from './components/Landing'
import Navbar from './components/Navbar';
function App() {
  useEffect(() => {
   document.body.style.backgroundColor="#f0ebf8"
  }, [])
  
  return (
    <Router>
      <Navbar/>
        <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/create" element={<Formbody/>}/>
            <Route path="/form" element={<Createform/>}/>
            
        </Routes>
    </Router>

  );
}

export default App;
