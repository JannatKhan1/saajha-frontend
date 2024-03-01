import React from 'react';
import '../../index.css';
import NGOCard from '../../components/Volunteer/NGOCard';
import { getNGOs } from '../../features/ngos/ngoSlice'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../../components/Spinner'
import Header from '../../components/Volunteer/Header';



function Landing() {
  const { ngos } = useSelector((state) => state.ngos)

  //V2: Apply button and text pop up
  // const [isApplied, setIsApplied] = useState(false);
  // const [isTextPopupOpen, setIsTextPopupOpen] = useState(false);
  // const [textValue, setTextValue] = useState('');

  // const handleApplyClick = () => {
  //   if (textValue.trim().split(/\s+/).length >= 200) {
  //     setIsTextPopupOpen(false);
  //     setIsApplied(true);
  //     handleApply(index);
  //   } else {
  //     alert('Please enter at least 200 words.');
  //   }
  // };


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getNGOs())
  }, [dispatch])

  
  if (!ngos) {
    return <Spinner />
  }
  return (
    <>
    <Header />
    <div className="card-wrapper">
      {ngos.map((ngo) => (
        <NGOCard key={ngo._id} ngo = {ngo}/>
      ))}
      
      {/* V2: Apply button and text pop up */}
      {/* <div>
          <button
            className={`apply-button ${isApplied ? 'applied' : ''}`}
            onClick={() => setIsTextPopupOpen(true)} // Open the text box pop-up
          >
            {isApplied ? 'Applied' : buttonApply}
          </button>
          {/* Text box pop-up */}
          {/* {isTextPopupOpen && (
            <div className="text-popup">
              <h2>Why do you want to join this NGO?</h2>
              <textarea
                value={textValue}
                onChange={(e) => setTextValue(e.target.value)}
                placeholder="Enter text (max 200 words)"
                maxLength={200}
              />
              <button onClick={handleApplyClick}>Submit</button>
            </div>
          )} */}
        {/* </div> */} 
      
    </div>
    </>
  );
};



export default Landing