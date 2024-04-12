//VERSION 4
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaSignInAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Navbar } from '../../components/Navbar';


function UpdateCase() {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    email: '',
    gender: '',
    guardianName: '',
    guardianPhone: ''
  });

  const { name, dob, email, gender, guardianName, guardianPhone } = formData;

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
      name, dob, email, gender, guardianName, guardianPhone
    }

    
  };

  return (
    <>
      <Navbar />
      <section className='heading'>
        <h1>
          <FaSignInAlt /> Case Updation
        </h1>
        <p>Update your Case</p>
      </section>
      <section className='form'>
        <form onSubmit={onSubmit}>
         
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='name'
              name='name'
              value={name}
              onChange={onChange}
              placeholder='Enter the name of Case'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='date'
              className='form-control'
              id='dob'
              name='dob'
              value={dob}
              onChange={onChange}
              placeholder='Enter the Date of Birth of Case'
              required
            />
          </div>

          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={email}
              onChange={onChange}
              placeholder="Enter case's email address"
              required
            />
          </div>

          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='gender'
              name='gender'
              value={gender}
              onChange={onChange}
              placeholder="Enter case's gender"
              required
            />
          </div>
      
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='guardianName'
              name='guardianName'
              value={guardianName}
              onChange={onChange}
              placeholder="Enter guardian's name"
              required
            />
          </div>
         
          <div className='form-group'>
            <input
              type='tel'
              className='form-control'
              id='guardianPhone'
              name='guardianPhone'
              value={guardianPhone}
              onChange={onChange}
              placeholder='Enter guardian phone number'
              maxLength={10}
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

export default UpdateCase;