import React from 'react';
import {  Link } from 'react-router-dom';
import CounsellorHeader from '../../components/Counsellor/CounsellorHeader';
import '../../index.css';

function CounsellorLanding() {

  return (
    <>
      <CounsellorHeader />
      <Link to='/CaseRegister' className='btn btn-reverse btn-sm'>
                Register Case
      </Link>
    </>
  );
}

export default CounsellorLanding;