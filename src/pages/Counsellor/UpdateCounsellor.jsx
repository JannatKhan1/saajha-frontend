//VERSION 4
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaSignInAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Navbar } from '../../components/Navbar';


function UpdateCounsellor() {
  const [formData, setFormData] = useState({
    certification: '',
    specialisation: ''
  });

  const { certification, specialisation } = formData;
  

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

    const counsellorData = {
      certification,
      specialisation
    };

    
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