//VERSION 4
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { getCounsellor } from '../../features/counsellors/counsellorSlice'
import { useParams} from 'react-router-dom'
import Spinner from '../../components/Spinner'
import { Navbar } from '../../components/Navbar'


function ViewCounsellor() {
  
  const { counsellor } = useSelector((state) => state.counsellors)

  const dispatch = useDispatch()
  const { counsellorId } = useParams()

  useEffect(() => {
    dispatch(getCounsellor(counsellorId)).unwrap().catch(toast.error)
  }, [counsellorId, dispatch])


  if (!counsellor) {
    return <Spinner />
  }

  return (
    <>
    <Navbar />
    <div>
      <header>
        <h2>
        Counsellor ID: {counsellor._id}
        </h2>
        <h3>Name: {counsellor.name}</h3>
        <h3>Email: {counsellor.email}</h3>
        <h3>Certification: {counsellor.certification}</h3>
        <h3>Specialisation: {counsellor.specialisation}</h3>
        <h3>DOB: {counsellor.dob}</h3>
        <h3>Gender: {counsellor.gender}</h3>
        <hr />
        
      </header>
      
    </div>
    </>
  )
}

export default ViewCounsellor