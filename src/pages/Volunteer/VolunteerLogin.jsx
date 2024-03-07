import { useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { loginVolunteer } from '../../features/volunteers/volunteerSlice'
import Spinner from '../../components/Spinner'
import { Navbar } from '../../components/Navbar'
//Version 3
import '../../index.css'


function VolunteerLogin() {
  const [formData, setFormData] = useState({
     email: '',
    password: '',
  })
  const { email, password } = formData
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
    const volunteerData = {
      email,
      password,
    }
    dispatch(loginVolunteer(volunteerData))
      .unwrap()
      .then((volunteer) => {
        toast.success(`Logged in as ${volunteer.name}`)
        navigate('/VolunteerLanding')
      })
      .catch(toast.error)
  }
  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
    <Navbar />
      <section className='heading'>
        <h1>
          <FaSignInAlt /> Login 
        </h1>
        <p>Please log in Volunteer</p>
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
            <button className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>

    </>
  )
}
 
export default VolunteerLogin