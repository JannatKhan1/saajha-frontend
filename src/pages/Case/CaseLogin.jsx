/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaSignInAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { loginCase } from '../../features/casee/caseSlice'
import { Navbar } from '../../components/Navbar';

function CaseLogin() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',    
  });

  const { email, password,} = formData;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault()
    const caseData = {
        email,
        password,
      }
      dispatch(loginCase(caseData))
        .unwrap()
        .then((casee) => {
          toast.success(`Logged in as ${casee.name}`)
          navigate('/CaseLanding')
        })
        .catch(toast.error)
  };

  

  return (
    <>
      <Navbar />
      <section className='heading'>
        <h1>
          <FaSignInAlt /> Case Login
        </h1>
        <p> Login your case</p>
      </section>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={email}
              onChange={onChange}
              placeholder='Enter your email address'
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
              placeholder='Enter password'
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

export default CaseLogin;