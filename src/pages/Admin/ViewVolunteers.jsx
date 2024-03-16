import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {  useParams } from 'react-router-dom'
import Spinner from '../../components/Spinner'
import AdminHeader from '../../components/Admin/AdminHeader'
import { getRequests } from '../../features/requests/requestSlice'
import { toast } from 'react-toastify'


function ViewVolunteers() {
  const { requests } = useSelector((state) => state.requests)
  const { ngoId } = useParams()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRequests(ngoId))
      .catch((error) => {
        toast.error("Error fetching requests");
      });
  }, [ngoId, dispatch]);


  if (requests === undefined) {
    return <Spinner />
  }
  if (requests.length === 0) {
    return (
        <>
        <AdminHeader />
        <p> Sorry! We have no current volunteers in our NGO! </p>
        </>
    )
  }
  

  return (
    <>
      <AdminHeader/>
      <h1>View Volunteers</h1>
      <table style={{ width:'100%', borderCollapse:'collapse' }}>
      <thead style={{ backgroundColor: "#f0f0f0", textAlign: "center", padding: "20px" }}>
        <tr>
          <>
          <th>Volunteer Name</th>
          <th>Email ID</th>
          </>
        </tr>
      </thead>
      <tbody>
        {requests.map((request) => (
          <tr key={request._id}>
            {request.status === 'Approved' &&
            <>
            <td>{request.volunteer.name}</td>
            <td>{request.volunteer.email}</td>
            </> }
            
          </tr>
        ))}
      </tbody>
    </table>
        
      
    </>
  )
}

export default ViewVolunteers