import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaSignInAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../components/Spinner'
import { Navbar } from '../../components/Navbar'

function AddNGO() {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    imageUrl: '',
    employeeCount: '',
    servicesOffered: '',
    websiteUrl: '',
    phoneNo: '',
    mailId: '',
  });
  const { name, location, imageUrl, employeeCount, servicesOffered, websiteUrl, phoneNo, mailId } = formData;
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
    navigate('/AdminLanding');
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Navbar />
      <section className='heading'>
        <h1>
          <FaSignInAlt /> Add your NGO Details
        </h1>
        <p>Enter the following details for your NGO</p>
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
              placeholder='Enter name of your NGO'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='location'
              name='location'
              value={location}
              onChange={onChange}
              placeholder='Enter location of your NGO'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='imageUrl'
              name='imageUrl'
              value={imageUrl}
              onChange={onChange}
              placeholder='Enter image URL of your NGO'
            />
          </div>
          <div className='form-group'>
            <input
              type='number'
              className='form-control'
              id='employeeCount'
              name='employeeCount'
              value={employeeCount}
              onChange={onChange}
              placeholder='Enter employee count'
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='servicesOffered'
              name='servicesOffered'
              value={servicesOffered}
              onChange={onChange}
              placeholder='Enter services offered by your NGO'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='websiteUrl'
              name='websiteUrl'
              value={websiteUrl}
              onChange={onChange}
              placeholder='Enter URL of your website'
            />
          </div>
          <div className='form-group'>
            <input
              type='number'
              className='form-control'
              id='phoneNo'
              name='phoneNo'
              value={phoneNo}
              onChange={onChange}
              placeholder='Enter phone number'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='mailId'
              name='mailId'
              value={mailId}
              onChange={onChange}
              placeholder='Enter mail id of your ngo'
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

export default AddNGO;