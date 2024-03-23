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
import AdminLogin from './pages/Admin/AdminLogin';
import AdminRegister from './pages/Admin/AdminRegister';
import ViewStatus from './pages/Volunteer/ViewStatus';
import FAQs from './pages/FAQs';
import AdminLanding from './pages/Admin/AdminLanding';
import {VolunteerRoute, AdminRoute, CounsellorRoute, CaseRoute } from './components/PrivateRoute';
import ViewNGO from './pages/NGO/ViewNGO';
import AddNGO from './pages/NGO/AddNGO'
import UpdateNGO from './pages/NGO/UpdateNGO'
import ViewRequests from './pages/Admin/ViewRequests';
import UpdateStatus from './pages/Admin/UpdateStatus';
import ViewVolunteers from './pages/Admin/ViewVolunteers';
import AddRequirements from './pages/Admin/AddRequirements';
import CounsellorRegister from './pages/Counsellor/CounsellorRegister';
import CounsellorLogin from './pages/Counsellor/CounsellorLogin';
import CounsellorLanding from './pages/Counsellor/CounsellorLanding';
import CaseRegister from './pages/Case/CaseRegister'
import CaseLogin from './pages/Case/CaseLogin';
import CaseLanding from './pages/Case/CaseLanding';

function App() {
  return (
    <>
    <Router>
      <div className='App'>
          <Routes>
            
          {/* Regular User Routes */}
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<Home />} />
            <Route path='/NGOs' element={<NGOs/>} />
            <Route path='/LoginSignup' element={<CardItemLogin/>} />
            <Route path='/FAQs' element={<FAQs/>} />
            <Route path='/ContactUs' element={<Home />} />
          
          
          {/* Volunteer Routes */}
           <Route path='/VolunteerRegister' element={<VolunteerRegister/>} />
           <Route path='/VolunteerLogin' element={<VolunteerLogin/>} />
           
           <Route path='/VolunteerLanding' element={<VolunteerRoute />}>
              <Route path='/VolunteerLanding' element={<Landing/>} /> 
            </Route>
            <Route path='/application/:ngoId' element={<VolunteerRoute />}>
               <Route path='/application/:ngoId' element = {<ViewStatus/>} /> 
            </Route>
            

            {/* Admin Routes */}
            <Route path='/AdminRegister' element={<AdminRegister/>} />
            <Route path='/AdminLogin' element={<AdminLogin/>} /> 
            
            <Route path='/AdminLanding' element={<AdminLanding/>} />
            
            {/* NGO Routes */}
            <Route path='/ViewNGO/:ngoId' element={<AdminRoute />}>
              <Route path='/ViewNGO/:ngoId' element={<ViewNGO />} /> 
            </Route>
            <Route path='/AddNGO' element={<AdminRoute />}>
               <Route path='/AddNGO' element = {<AddNGO/>} /> 
            </Route>
            <Route path='/UpdateNGO/:ngoId' element={<AdminRoute />}>
               <Route path='/UpdateNGO/:ngoId' element = {<UpdateNGO/>} /> 
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
            <Route path='/AddRequirements' element={<AdminRoute />}>
              <Route path='/AddRequirements' element={<AddRequirements />} /> 
            </Route>
          <Route path='/requirement/:adminId' element = {<ViewRequirement/>} /> 

          {/* Counsellor-Admin Routes */}
          <Route path='/CounsellorRegister' element={<AdminRoute />}>
              <Route path='/CounsellorRegister' element={<CounsellorRegister />} /> 
          </Route>
          
          {/* Counsellor Routes */}
          <Route path='/CounsellorLogin' element={<CounsellorLogin/>} /> 
          <Route path='/CounsellorLanding' element={<CounsellorRoute />}>
              <Route path='/CounsellorLanding' element={<CounsellorLanding />} /> 
          </Route>
          <Route path='/CaseRegister' element={<CounsellorRoute />}>
              <Route path='/CaseRegister' element={<CaseRegister />} /> 
          </Route>

          {/* Case Routes   */}
          <Route path='/CaseLogin' element={<CaseLogin/>} /> 
          <Route path='/CaseLanding' element={<CaseRoute />}>
              <Route path='/CaseLanding' element={<CaseLanding />} /> 
          </Route>
          </Routes>
      </div>
      </Router>
      <ToastContainer/>
    </>
  );
}

export default App;
