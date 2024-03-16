import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Home from './pages/Home';
import CardItemLogin from './components/CardItemLogin';
import NGOs from './pages/NGOs';
import Landing from './pages/Volunteer/Landing';
import ViewRequirement from './pages/Volunteer/ViewRequirement'
import VolunteerRegister from './pages/Volunteer/VolunteerRegister';
import VolunteerLogin from './pages/Volunteer/VolunteerLogin';
import { VolunteerRoute } from './components/PrivateRoute';
import AdminLogin from './pages/Admin/AdminLogin';
import AdminRegister from './pages/Admin/AdminRegister';
import ViewStatus from './pages/Volunteer/ViewStatus';
import FAQs from './pages/FAQs';
import AdminLanding from './pages/Admin/AdminLanding';
import { AdminRoute } from './components/PrivateRoute';
import ViewNGO from './pages/NGO/ViewNGO';
import ViewRequests from './pages/Admin/ViewRequests';
import UpdateStatus from './pages/Admin/UpdateStatus';
import ViewVolunteers from './pages/Admin/ViewVolunteers';

function App() {
  return (
    <>
    <Router>
      <div className='App'>
          <Routes>
            
          {/* Regular User Routes */}
            <Route path='/' element={<Home />} />
            <Route path='/NGOs' element={<NGOs/>} />
            <Route path='/LoginSignup' element={<CardItemLogin/>} />
            <Route path='/FAQs' element={<FAQs/>} />
          
          
          {/* Volunteer Routes */}
           <Route path='/VolunteerRegister' element={<VolunteerRegister/>} />
           <Route path='/VolunteerLogin' element={<VolunteerLogin/>} />
           
           <Route path='/VolunteerLanding' element={<VolunteerRoute />}>
              <Route path='/VolunteerLanding' element={<Landing/>} /> 
            </Route>
            <Route path='/requirement/:adminId' element={<VolunteerRoute />}>
               <Route path='/requirement/:adminId' element = {<ViewRequirement/>} /> 
            </Route>
            <Route path='/application/:ngoId' element={<VolunteerRoute />}>
               <Route path='/application/:ngoId' element = {<ViewStatus/>} /> 
            </Route>
            

            {/* Admin Routes */}
            <Route path='/AdminRegister' element={<AdminRegister/>} />
            <Route path='/AdminLogin' element={<AdminLogin/>} /> 
            {/* Version 3 */}
            
            <Route path='/AdminLanding' element={<AdminLanding/>} />
            {/* NGO Routes */}
            <Route path='/ViewNGO/:ngoId' element={<AdminRoute />}>
              <Route path='/ViewNGO/:ngoId' element={<ViewNGO />} /> 
            </Route>

            {/* Volunteer Request Routes */}
            <Route path='/ViewRequests/:ngoId' element={<AdminRoute />}>
              <Route path='/ViewRequests/:ngoId' element={<ViewRequests />} /> 
            </Route>
            <Route path='/:requestId' element={<AdminRoute />}>
              <Route path='/:requestId' element={<UpdateStatus />} /> 
            </Route>
            <Route path='/ViewVolunteers/:ngoId' element={<AdminRoute />}>
              <Route path='/ViewVolunteers/:ngoId' element={<ViewVolunteers />} /> 
            </Route>
          </Routes>
      </div>
      </Router>
      <ToastContainer/>
    </>
  );
}

export default App;
