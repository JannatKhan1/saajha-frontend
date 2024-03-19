import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import AdminHeader from '../../components/Admin/AdminHeader'
import { addRequirements } from '../../features/requirements/requirementSlice'

function AddRequirements() {
  const { admin } = useSelector((state) => state.admins)

  const [requirements, setRequirements] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(addRequirements({requirements}))
      .unwrap()
      .then(() => {
        // We got a good response so navigate the user
        navigate('/AdminLanding')
        toast.success('Requirements added successfully!')
      })
      .catch(toast.error)
  }

  return (
    <>
      <AdminHeader/>

      <section className='heading'>
        <h1>Add Requirements</h1>
        <p>Let our Volunteers know what we are looking for</p>
      </section>

      <section className='form'>
 
        <form onSubmit={onSubmit}>
          
          <div className='form-group'>
            <label htmlFor='requirements'>Requirements for Volunteer</label>
            <textarea
              name='requirements'
              id='requirements'
              className='form-control'
              placeholder='Requirements'
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
            ></textarea>
          </div>
          <div className='form-group'>
            <button className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}
 
export default AddRequirements