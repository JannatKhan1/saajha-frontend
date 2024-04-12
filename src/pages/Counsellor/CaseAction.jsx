// VERSION 4

import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Spinner from '../../components/Spinner'
import CounsellorHeader  from '../../components/Counsellor/CounsellorHeader'
import { getAll } from '../../features/actions/actionSlice'
import { toast } from 'react-toastify'
import '../../indexs.css'


function CaseAction() {
  const { actions } = useSelector((state) => state.actions)
  const { counsellorId } = useParams()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAll(counsellorId))
      .catch((error) => {
        toast.error("Error fetching requests");
      });
  }, [counsellorId, dispatch]);


  if (actions === undefined) {
    return <Spinner />
  }
  if (actions.length === 0) {
    return (
        <>
        <CounsellorHeader />
        <p> No Cases Registered As Of Now !</p>
        </>
    )
  }
  

  return (
    <>
      <CounsellorHeader />
      <h1>Case Action</h1>
      <table style={{ width:'100%', borderCollapse:'collapse' }}>
      <thead style={{ backgroundColor: "#f0f0f0", textAlign: "center", padding: "20px" }}>
        <tr>
          <th>Case Name</th>
          <th>Case Email ID</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {actions.map((action) => (
          <tr key={action._id}>
            <td>{action.name}</td>
            <td>{action.email}</td>
 
            <td>
            <Link to={`/UpdateCase/${action._id}`}
            >Update Case Details</Link>
            </td>
            <td>
            <Link to={`/AddRemarks/${action._id}`}
            > Add Remarks </Link>
            </td>
            <td>
            <Link
            > View Case Details </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
        
      
    </>
  )
}

export default CaseAction