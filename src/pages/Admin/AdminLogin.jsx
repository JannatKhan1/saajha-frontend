import { useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import {RiAdminFill} from 'react-icons/ri'
import { useSelector, useDispatch } from 'react-redux'
import { loginAdmin } from '../../features/admins/adminSlice'
import Spinner from '../../components/Spinner'
import { Navbar } from '../../components/Navbar'
//Version 3
import '../../index.css'

function AdminLogin() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    key: ''
  })
  const { email, password, key } = formData
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isLoading } = useSelector((state) => state.admins)
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  
  const onSubmit = (e) => {
    e.preventDefault()
    const adminData = {
      email,
      password,
      key
    }
    dispatch(loginAdmin(adminData))
      .unwrap()
      .then((admin) => {

        toast.success(`Logged in as Admin ${admin.name}`)
        navigate('/AdminLanding')
      })
      .catch(toast.error)
  }
  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
    <Navbar/>
      <section className='heading'>
        <h1>
          <RiAdminFill /> Admin Login
        </h1>

        <p style={{ color: 'red', textDecoration: "underline" }} >
          Only admins can access this page!
        </p>

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
            <input
              type='String'
              className='form-control'
              id='key'
              name='key'
              value={key}
              onChange={onChange}
              placeholder='Enter secret key shared by company'
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
 
export default AdminLogin