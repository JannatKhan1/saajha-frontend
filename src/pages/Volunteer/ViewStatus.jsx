//Version 2
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getApplications } from '../../features/applications/applicationSlice';
import { useParams } from 'react-router-dom';

//Version 3
import '../../index.css';

function ViewStatus() {
  const { applications } = useSelector((state) => state.applications);
  const dispatch = useDispatch();
  const { ngoId } = useParams();

  useEffect(() => {
    dispatch(getApplications(ngoId)) // Pass ngoId to getApplications
      .unwrap()
      .catch(error => {
        console.error(error);
      });
  }, [ngoId, dispatch]);

  // Assuming ngoApplications is an array, you need to access its elements properly
  const ngoApplications = applications.filter(app => app.ngo === ngoId);
   
  if (!ngoApplications || !ngoApplications.length) {
    return (
      <>
        <p>Fill out the application as soon as possible</p>
      </>
    );
  }

  // Assuming you want to display details of the first application
  const firstApplication = ngoApplications[0];

  return (
    <div>
      <h2>Here are the details we received: </h2>
      <div>{firstApplication.description}</div>
      <p>Your application status is: </p>
      <div className={`status status-${firstApplication.status}`}>{firstApplication.status}</div>
    </div>
  );
}

export default ViewStatus;
