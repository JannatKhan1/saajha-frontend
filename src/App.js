import React from 'react';
import './App.css';
import CardItemLogin from './components/CardItemLogin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NGOs from './pages/NGOs';
import { Navbar } from './components/Navbar';
import Landing from './pages/Volunteer/Landing';
import ViewRequirement from './pages/Volunteer/ViewRequirement'

function App() {
  return (
    <>
    <Router>
      <div className='App'>
      <Navbar/>
          <Routes>
            <Route path='/NGOs' element={<NGOs/>} />
           {/* Volunteer Routes */}
           {/* Private Route is needed */}
            <Route path='/VolunteerLanding' element={<Landing/>} />
            <Route path='/requirement/:adminId' element={<ViewRequirement/>} />
            
            <Route path='/LoginSignup' element={<CardItemLogin/>} />
          </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
