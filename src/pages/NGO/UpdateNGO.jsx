import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaSignInAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../components/Spinner'
import { Navbar } from '../../components/Navbar'
import { useParams} from 'react-router-dom'
import { updateNGO } from '../../features/ngos/ngoSlice';

function UpdateNGO() {
  const { ngo } = useSelector((state) => state.ngos)
  const [formData, setFormData] = useState({
    name: ngo.name,
    location: ngo.location,
    image: ngo.image,
    employeeCount: ngo.employeeCount,
    services: ngo.services,
    website: ngo.website,
    phoneNo: ngo.phoneNo,
    emailNGO: ngo.emailNGO,
  });
  const { name, location, image, employeeCount, services, website, phoneNo, emailNGO } = formData;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { ngoId } = useParams()

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(updateNGO({ ngoId, ngoData: formData }));
      if (response.payload.success) {
        console.log('NGO Updated:', response.payload.data);
        navigate('/AdminLanding');
        toast.success('NGO Updated');
      } else {
        throw new Error(response.payload.error || 'Failed to update NGO');
      }
    } catch (error) {
      console.error('Update NGO Error:', error.message);
      toast.error('Failed to update NGO');
    }
  };

  if (!ngo) {
    return <Spinner />;
  }

  return (
    <>
      <Navbar />
      <section className='heading'>
        <h1>
          <FaSignInAlt />Update NGO Details
        </h1>
        <p>You may update your NGO details</p>
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
              value={phoneNo}
              onChange={onChange}
              placeholder='Enter phone number'
              
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

export default UpdateNGO;