
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaSignInAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Navbar } from '../../components/Navbar';
import { registerCounsellor } from '../../features/counsellors/counsellorSlice';

function CounsellorRegister() {
  const [formData, setFormData] = useState({
    name: '',
    DOB: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    certification: '',
    specialisation: ''
  });

  const { name, dob, email, password, confirmPassword, gender, certification, specialisation } = formData;
  
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
        const counsellorData = {
            name, dob, email, password, confirmPassword, gender, certification, specialisation
          }
          dispatch(registerCounsellor(counsellorData))
            .unwrap()
            .then((counsellor) => {
              toast.success(`Registered new counsellor - ${counsellor.name}`)
              navigate('/AdminLanding')
            })
            .catch(toast.error)
    }
  };



  return (
    <>
      <Navbar />
      <section className='heading'>
        <h1>
          <FaSignInAlt /> Counsellor Registration
        </h1>
        <p>Enter your details</p>
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
              placeholder="Enter Counsellor's Name"
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
              placeholder="Enter Counsellor's Date of Birth"
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
              placeholder="Enter Counsellor's email address"
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
              placeholder="Enter Counsellor's gender"
              required
            />
          </div>
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

export default CounsellorRegister;