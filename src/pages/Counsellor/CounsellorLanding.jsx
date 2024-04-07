import React from 'react';
import {  Link } from 'react-router-dom';
import CounsellorHeader from '../../components/Counsellor/CounsellorHeader';
import '../../indexs.css';  
import { useSelector } from 'react-redux';

function CounsellorLanding() {
  const counsellorId = useSelector(state => state.counsellors.counsellor?._id);
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
        <Link to={`/CaseAction/${counsellorId}`} className='btn btn-reverse btn-sm'>
                Case Actions
        </Link>
        </div>
    </div>
    </>
  );
}

export default CounsellorLanding;



