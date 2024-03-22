import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Spinner from '../../components/Spinner'
import AdminHeader from '../../components/Admin/AdminHeader'
import { getRequests } from '../../features/requests/requestSlice'
import { toast } from 'react-toastify'
import '../../indext.css'


function ViewRequests() {
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
        <p> Sorry! We have no current volunteer requests! </p>
        </>
    )
  }
  

  return (
    <>
      <AdminHeader/>
      <h1>Volunteer Requests</h1>
      <table style={{ width:'100%', borderCollapse:'collapse' }}>
      <thead style={{ backgroundColor: "#f0f0f0", textAlign: "center", padding: "20px" }}>
        <tr>
          <th>Request ID</th>
          <th>Volunteer Name</th>
          <th>Email ID</th>
          <th>Request Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {requests.map((request) => (
          <tr key={request._id}>
            <td>{request._id}</td> 
            <td>{request.volunteer.name}</td>
            <td>{request.volunteer.email}</td>
            <td className={`status status-${request.status}`}>{request.status}</td>
            <td>
            <Link
              to={`/${request._id}/`}
              className="btn btn-block"
            >Action</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
        
      
    </>
  )
}

export default ViewRequests