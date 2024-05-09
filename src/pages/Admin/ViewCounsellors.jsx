import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../../components/Spinner'
import AdminHeader from '../../components/Admin/AdminHeader'
import { getCounsellors } from '../../features/counsellors/counsellorSlice'
import { toast } from 'react-toastify'
import '../../indexs.css';
import { useParams } from 'react-router-dom'



function ViewCounsellors() {
  const { counsellors } = useSelector((state) => state.counsellors)

  const dispatch = useDispatch()

  const { ngoId } = useParams()

  useEffect(() => {
    dispatch(getCounsellors(ngoId))
      .catch((error) => {
        toast.error("Error fetching counsellors");
      });
  }, [ngoId, dispatch]);


  if (counsellors === undefined) {
    return <Spinner />
  }
  if (counsellors.length === 0) {
    return (
        <>
        <AdminHeader />
        <p> Sorry! We have no current counsellors in our NGO! </p>
        </>
    )
  }
  

  return (
    <>
      <AdminHeader/>
      <h1 className='hello'>View Counsellors</h1>
      <table>
      <thead>
        <tr>
          <>
          <th>Counsellor Name</th>
          <th>Email ID</th>
          </>
        </tr>
      </thead>
      <tbody>
        {counsellors.map((counsellor) => (
          <tr key={counsellor._id}>
            <td>{counsellor.name}</td>
            <td>{counsellor.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
        
      
    </>
  )
}

export default ViewCounsellors