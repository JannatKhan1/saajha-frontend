
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Navbar } from '../../components/Navbar';
import { loginCounsellor } from '../../features/counsellors/counsellorSlice';
import { toast } from 'react-toastify'

function CounsellorLogin() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    key: ''
  });

  const { email, password, key } = formData;
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
    const counsellorData = {
      email,
      password,
      key
    }
    dispatch(loginCounsellor(counsellorData))
      .unwrap()
      .then((counsellor) => {

        toast.success(`Logged in as Counsellor ${counsellor.name}`)
        navigate('/CounsellorLanding')
      })
      .catch(toast.error)
  };

  

  return (
    <>
      <Navbar />
      <section className='heading'>
        <h1>
          <FaSignInAlt /> Counsellor Login
        </h1>
        <p> Please Login</p>
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
            <input
              type='String'
              className='form-control'
              id='key'
              name='key'
              value={key}
              onChange={onChange}
              placeholder='Enter secret key'
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

export default CounsellorLogin;