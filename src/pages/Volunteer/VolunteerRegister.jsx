import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { registerVolunteer } from '../../features/volunteers/volunteerSlice'
import Spinner from '../../components/Spinner'
import { Navbar } from '../../components/Navbar'
//Version 3
import '../../index.css'


function VolunteerRegister() {
  const [formData, setFormData] = useState({  
    name: '',
    dob:'',
    email: '',
    password: '',
    password2: '',
  })
  const { name, email, password, password2 , dob} = formData
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isLoading } = useSelector((state) => state.volunteers)
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  
  const onSubmit = (e) => {
    e.preventDefault()
    if (password !== password2) {
      toast.error('Passwords do not match')
    } else {
      const volunteerData = {
        name,
        email,
        password,
        dob,
      }
      dispatch(registerVolunteer(volunteerData))
        .unwrap()
        .then((volunteer) => {
          toast.success(`Welcome Aboard ${volunteer.name}!`)
          navigate('/VolunteerLanding')
        })
        .catch(toast.error)
    }
  }
  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
    <Navbar />
      <section className='heading'>
        <h1>
          Register
        </h1>
        <p>Please create an account</p>
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
              placeholder='Enter your name'
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
              placeholder='Enter your birthdate'
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
              placeholder='Enter your email'
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
              id='password2'
              name='password2'
              value={password2}
              onChange={onChange}
              placeholder='Confirm password'
              required
            />
          </div>
          <div className='form-group'>
            <button className='btn btn-block success'>Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}
   
  
export default VolunteerRegister

