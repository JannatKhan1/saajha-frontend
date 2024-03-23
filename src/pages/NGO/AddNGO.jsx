//Version 3
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaSignInAlt } from 'react-icons/fa';
import { useDispatch} from 'react-redux';
import { Navbar } from '../../components/Navbar'
//Version 3.1
import { addNGO } from '../../features/ngos/ngoSlice';

function AddNGO() {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    image: '',
    employeeCount: '',
    services: '',
    website: '',
    phoneNo: '',
    emailNGO: '',
  });
  const { name, location, image, employeeCount, services, website, phoneNo, emailNGO } = formData;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //Version 3.1
  const onSubmit = (e) => {
    e.preventDefault()
    const formData = {
      name, location, image, employeeCount, services, website, phoneNo, emailNGO
    }
    dispatch(addNGO(formData))
      .unwrap()
      .then(() => {
        // We got a good response so navigate the user
        navigate('/AdminLanding')
        toast.success('New NGO created!')
      })
      .catch(toast.error)
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
              id='image'
              name='image'
              value={image}
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
              id='services'
              name='services'
              value={services}
              onChange={onChange}
              placeholder='Enter services offered by your NGO'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='website'
              name='website'
              value={website}
              onChange={onChange}
              placeholder='Enter URL of your website'
            />
          </div>
          <div className='form-group'>
            <input
              type='tel'
              className='form-control'
              id='phoneNo'
              name='phoneNo'
              pattern="[0-9]{10}"
              maxlength="10"
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
              id='emailNGO'
              name='emailNGO'
              value={emailNGO}
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