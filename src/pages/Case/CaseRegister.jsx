import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaSignInAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Navbar } from '../../components/Navbar';
import { registerCase } from '../../features/casee/caseSlice'

function CaseRegister() {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    guardianName: '',
    guardianPhone: ''
  });

  const { name, dob, email, password, confirmPassword, gender, guardianName, guardianPhone } = formData;

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
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
        const caseData = {
            name, dob, email, password, confirmPassword, gender, guardianName, guardianPhone
          }
          dispatch(registerCase(caseData))
            .unwrap()
            .then((casee) => {
              toast.success(`Registered new case ${casee.name} successfully!`)
              navigate('/CounsellorLanding')
            })
            .catch(toast.error)
    }
  };


  return (
    <>
      <Navbar />
      <section className='heading'>
        <h1>
          <FaSignInAlt /> Case Registration
        </h1>
        <p>Register your Case</p>
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
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              onChange={onChange}
              placeholder='Set password for your case'
              required
            />
          </div>

          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='confirmPassword'
              name='confirmPassword'
              value={confirmPassword}
              onChange={onChange}
              placeholder='Confirm password'
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

export default CaseRegister;