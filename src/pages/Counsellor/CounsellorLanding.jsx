import React from 'react';
import {  Link } from 'react-router-dom';
import CounsellorHeader from '../../components/Counsellor/CounsellorHeader';
import '../../indexs.css';  

function CounsellorLanding() {

  return (
    <>
      <CounsellorHeader />
      <div className="counsellor-case-landing">
        <h1>Welcome, Counsellor</h1>
        <div className="options-container">
        <button className="option-button">Update Your Details</button>
        <button className="option-button">View Your Details</button>
        <Link to='/CaseRegister' className='btn btn-reverse btn-sm'>
                Register Case
        </Link>
        <button className="option-button">Case Actions</button>
        </div>
    </div>
    </>
  );
}

export default CounsellorLanding;



