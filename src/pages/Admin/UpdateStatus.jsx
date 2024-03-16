import { useSelector, useDispatch } from 'react-redux';
import {  useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getRequest, acceptStatus, rejectStatus } from '../../features/requests/requestSlice' 
import AdminHeader from '../../components/Admin/AdminHeader';
import { useNavigate } from 'react-router-dom';

function UpdateStatus() {
  const { requests } = useSelector((state) => state.requests);
  
  const { requestId } = useParams();


  const selectedRequest = requests.find((request) => request._id === requestId);

  
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  useEffect(() => {
    dispatch(getRequest(requestId));
  }, [dispatch, requestId]);
  
  
  // Accept Request
  const accept = () => {
    dispatch(acceptStatus(requestId))
      .unwrap()
      .then((response) => {
        toast.success('Request Apporved')
        navigate(-1);
      })
      
      .catch(toast.error)
  }

  // Reject Request
  const reject = () => {
    dispatch(rejectStatus(requestId))
      .unwrap()
      .then((response) => {
        toast.success('Request Rejected')
        navigate(-1);
        console.log(response)
      })
      .catch(toast.error)
  }

  return (
    <div>
      <AdminHeader />
        {selectedRequest ? (
          <div key={selectedRequest._id}>
            <h2>Request ID: {selectedRequest._id}</h2>
            <h3>Volunteer Name: {selectedRequest.volunteer.name}</h3>
            <h3>Volunteer Email: {selectedRequest.volunteer.email}</h3>
            <h3>Request Status: {selectedRequest.status}</h3>
            <hr />
            <div>
              <h3>Volunteer Application</h3>
              <p>{selectedRequest.description}</p>
            </div>
          </div>
        ) : (
          <p>Application not found</p>
        )}
       { selectedRequest.status === 'Applied' && (
        <>
          <button onClick={accept} className='btn btn-block btn-success'>
            Approve
          </button>
          <button onClick={reject} className='btn btn-block btn-danger'>
            Reject
          </button>
        </>
        )}
    </div>
  );
}

export default UpdateStatus;