import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link} from 'react-router-dom'
import { getNGOs } from '../../features/ngos/ngoSlice';
import Spinner from '../../components/Spinner';
import Header from '../../components/Volunteer/Header';
//Version 2
import NGOCard from '../../components/NGOCard';
import { createApplication } from '../../features/applications/applicationSlice'
import { toast } from 'react-toastify'; 
import '../../index.css';

function Landing() {
  const { ngos } = useSelector((state) => state.ngos);

  const dispatch = useDispatch();

  //Version 2
  const navigate = useNavigate();

  const [appliedNGOs, setAppliedNGOs] = useState({}); 
  const [isTextPopupOpen, setIsTextPopupOpen] = useState(false);
  const [textValue, setTextValue] = useState('');
  const [ngoId, setNgoId] = useState('');

  useEffect(() => {
    dispatch(getNGOs());
  }, [dispatch]);

  const handleApplyClick = (ngoId) => {
    setNgoId(ngoId);
    setIsTextPopupOpen(true);
  };

  const handleTextChange = (event) => {
    const text = event.target.value;
    setTextValue(text);
  };

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
        setAppliedNGOs((prev) => ({ ...prev, [ngoId]: true })); // Update applied status for the current NGO
        setIsTextPopupOpen(false);
      })
      .catch((error) => {
        toast.error(error.message || 'Failed to submit application');
      });
  };

  if (!ngos) {
    return <Spinner />;
  }

  return (
    <>
      <Header />
      <div className="card-wrapper">
        {ngos.map((ngo) => (
          <div key={ngo._id}>
            <NGOCard ngo={ngo} />
            {/* Version 2 */}
            <div className='button-container'>
            {appliedNGOs[ngo._id] ? (
              <button className="apply-button applied" disabled>
                Applied
              </button>
            ) : (
              <button
                className="apply-button"
                onClick={() => handleApplyClick(ngo._id)}
              >
                Apply
              </button>
            )}
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
          <Link to={`/requirement/${ngo.admin}`} className='btn btn-reverse btn-sm'>
            View Requirements
          </Link>
          <Link to={`/application/${ngo._id}`} className='btn btn-reverse btn-sm'>
            View Status
          </Link>
          </div>
          </div>
        ))}
        
      </div>
    </>
  );
}

export default Landing;

