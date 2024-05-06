import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaSignInAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Navbar } from '../../components/Navbar';
import { useParams } from 'react-router-dom';
import { updateCounsellor } from '../../features/counsellors/counsellorSlice';


function UpdateCounsellor() {
  const [formData, setFormData] = useState({
    certification: '',
    specialisation: ''
  });

  const { certification, specialisation } = formData;
  

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Version 4.1
  const { counsellorId } = useParams()

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Version 4.1
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(updateCounsellor({ counsellorId, counsellorData: formData }));
      if (response.payload.success) {
        console.log('Counsellor Updated:', response.payload.data);
        navigate('/CounsellorLanding');
        toast.success('Counsellor Updated');
      } else {
        throw new Error(response.payload.error || 'Failed to update Counsellor');
      }
    } catch (error) {
      console.error('Update Counsellor Error:', error.message);
      toast.error('Failed to update Counsellor');
    }
    
  };

  return (
    <>
      <Navbar />
      <section className='heading'>
        <h1>
          <FaSignInAlt /> Counsellor Updation
        </h1>
        <p>Update your details</p>
      </section>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='certification'
              name='certification'
              value={certification}
              onChange={onChange}
              placeholder="Enter Counsellor's Certification"
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='specialisation'
              name='specialisation'
              value={specialisation}
              onChange={onChange}
              placeholder="Enter Counsellor's Specialisation"
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

export default UpdateCounsellor;