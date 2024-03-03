//Version 2
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { getApplication } from '../../features/applications/applicationSlice'
import { useParams } from 'react-router-dom'

function ViewStatus() {
  const { application } = useSelector((state) => state.applications)
  const dispatch = useDispatch()
  const { ngoId } = useParams()

  useEffect(() => {
    dispatch(getApplication(ngoId)).unwrap().catch(error => {
      if (error.message === "Not Authorized") {
        toast.error("You are not authorized to view this application.");
      } else if (error.message === "Application not found") {
        // You can choose not to show any notification here
      } else {
      }
    });
    return () => {
      // Reset application state when the component is unmounted
      dispatch(getApplication(null)); // Assuming null indicates no application
    }
  }, [ngoId, dispatch])

  if (!application || !application[0]) {
    return (
      <>
        <p>Fill out the application as soon as possible</p>
      </>
    )
  }

  const firstapp = application[0];

  return (
    <div>
        <h2>Here are the details we received: </h2>
      <div>{firstapp.description}</div>
      <p>Your application status is: </p>
      <div className={`status status-${firstapp.status}`}>{firstapp.status}</div>
    </div>
  )
}

export default ViewStatus
