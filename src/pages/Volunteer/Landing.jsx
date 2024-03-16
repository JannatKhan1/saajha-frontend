import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { getNGOs } from '../../features/ngos/ngoSlice';
import Spinner from '../../components/Spinner';
import Header from '../../components/Volunteer/Header';
import NGOCard from '../../components/NGOCard';
import { createApplication, getApplications } from '../../features/applications/applicationSlice';
import { toast } from 'react-toastify'; 
import '../../index.css';

function Landing() {
  const { ngos } = useSelector((state) => state.ngos);
  const { applications } = useSelector((state) => state.applications);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isTextPopupOpen, setIsTextPopupOpen] = useState(false);
  const [textValue, setTextValue] = useState('');
  const [ngoId, setNgoId] = useState('');

  useEffect(() => {
    dispatch(getNGOs());
  }, [dispatch]);

 
  

  const getFirstApplicationStatus = (ngoId) => {
    const ngoApplications = applications.filter(app => app.ngo === ngoId);
    const firstApplication = ngoApplications.length > 0 ? ngoApplications[0] : null;
    return firstApplication && ['Applied','Approved','Rejected'].includes(firstApplication.status);
  };

  const handleApplyClick = (ngoId) => {
    setNgoId(ngoId);
    setIsTextPopupOpen(true);
  };

   useEffect(() => {
    dispatch(getApplications())
      .unwrap()
      .catch(error => {
        console.error(error);
      });
  }, [dispatch]);

  const handleApplySubmit = (e) => {
    e.preventDefault();
    if (!ngoId) {
      console.error('NGO ID is undefined');
      return;
    }
    dispatch(createApplication({ ngoId: ngoId, applicationData: { description: textValue } }))
      .unwrap()
      .then(() => {
        navigate('/VolunteerLanding');
        toast.success('Your Application is added successfully!');
        setIsTextPopupOpen(false);
        window.location.reload();
      })
      .catch((error) => {
        toast.error(error.message || 'Failed to submit application');
      });
  };

  const handleTextChange = (event) => {
    const text = event.target.value;
    setTextValue(text);
  };

  if (!ngos) {
    return <Spinner />;
  }

  return (
    <>
      <Header />
      <div className="card-wrapper">
        {ngos.map((ngo) => {
          const firstApplicationStatus = getFirstApplicationStatus(ngo._id);
          return (
            <div key={ngo._id}>
              <NGOCard ngo={ngo} />
              {!firstApplicationStatus && (
                <div>
                  <button
                    className="apply-button"
                    onClick={() => handleApplyClick(ngo._id)}
                  >
                    Apply
                  </button>
                  {isTextPopupOpen && (
                    <div className="text-popup-container">
                      <div className="text-popup">
                        <button
                          className="close-button"
                          onClick={() => setIsTextPopupOpen(false)}
                        >
                          X
                        </button>
                        <h2>Why do you want to join this NGO?</h2>
                        <textarea
                          value={textValue}
                          onChange={handleTextChange}
                          placeholder="Enter text (max 200 words)"
                        />
                        <button onClick={handleApplySubmit}>Submit</button>
                      </div>
                    </div>
                  )}
                </div>
              )}
              <Link to={`/requirement/${ngo.admin}`} className='btn btn-reverse btn-sm'>
                View Requirements
              </Link>
              <Link to={`/application/${ngo._id}`} className='btn btn-reverse btn-sm'>
                View Status
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Landing;



  