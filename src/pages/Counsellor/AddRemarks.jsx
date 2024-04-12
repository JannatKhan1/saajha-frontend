// VERSION 4
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaSignInAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Navbar } from '../../components/Navbar';


function AddRemarks() {
  const [formData, setFormData] = useState({
    developmentalHistory: '',
    presentComplaints: '',
    advice: '',
    previousDiagnosis: '',
    currentDiagnosis: '',
    clinicalObservation: '',
    suggestedInvestigationType: '',
    diagnosticTest: '',
    testResults: '',
    report: '',
    SuggestionsForFurtherInvestigation: ''
  });

  const {
    developmentalHistory,
    presentComplaints,
    advice,
    previousDiagnosis,
    currentDiagnosis,
    clinicalObservation,
    suggestedInvestigationType,
    diagnosticTest,
    testResults,
    report,
    SuggestionsForFurtherInvestigation
  } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    
    const caseData = {
      developmentalHistory,
      presentComplaints,
      advice,
      previousDiagnosis,
      currentDiagnosis,
      clinicalObservation,
      suggestedInvestigationType,
      diagnosticTest,
      testResults,
      report,
      SuggestionsForFurtherInvestigation
    }

    
  };


  return (
    <>
      <Navbar />
      <section className='heading'>
        <h1>
          <FaSignInAlt /> Add Remarks
        </h1>
        <p>Add your remarks regarding the case </p>
      </section>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='developmentalHistory'
              name='developmentalHistory'
              value={developmentalHistory}
              onChange={onChange}
              placeholder='Enter developmental history'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='presentComplaints'
              name='presentComplaints'
              value={presentComplaints}
              onChange={onChange}
              placeholder='Enter present complaints'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='advice'
              name='advice'
              value={advice}
              onChange={onChange}
              placeholder='Enter advice'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='previousDiagnosis'
              name='previousDiagnosis'
              value={previousDiagnosis}
              onChange={onChange}
              placeholder='Enter previous diagnosis'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='currentDiagnosis'
              name='currentDiagnosis'
              value={currentDiagnosis}
              onChange={onChange}
              placeholder='Enter current diagnosis'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='clinicalObservation'
              name='clinicalObservation'
              value={clinicalObservation}
              onChange={onChange}
              placeholder='Enter clinical observation'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='suggestedInvestigationType'
              name='suggestedInvestigationType'
              value={suggestedInvestigationType}
              onChange={onChange}
              placeholder='Enter suggested investigation type'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='diagnosticTest'
              name='diagnosticTest'
              value={diagnosticTest}
              onChange={onChange}
              placeholder='Enter diagnostic test'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='testResults'
              name='testResults'
              value={testResults}
              onChange={onChange}
              placeholder='Enter test results'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='report'
              name='report'
              value={report}
              onChange={onChange}
              placeholder='Enter report'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='SuggestionsForFurtherInvestigation'
              name='SuggestionsForFurtherInvestigation'
              value={SuggestionsForFurtherInvestigation}
              onChange={onChange}
              placeholder='Enter suggestions for further investigation'
              required
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default AddRemarks;