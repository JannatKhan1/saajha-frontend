import React from 'react';
import CaseHeader from '../../components/Case/CaseHeader';

import '../../indexs.css';

function CaseLanding() {

  return (
    <>
      <CaseHeader />
      <div className="counsellor-case-landing">
      <h1>Welcome, Case</h1>
      <div className="options-container">

        <button className="option-button">View Remarks</button>
        <button className="option-button">View Your Details</button>
      </div>
    </div>
    </>
  );
}

export default CaseLanding;
