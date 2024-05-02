import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Spinner from '../../components/Spinner'
import CounsellorHeader from '../../components/Counsellor/CounsellorHeader'
import { getRemarks } from '../../features/remarks/remarkSlice'
import { toast } from 'react-toastify'
import '../../indext.css'


function ViewRemarks() {
  const { remarks } = useSelector((state) => state.remarks)
  const { caseId } = useParams()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRemarks(caseId))
      .catch((error) => {
        toast.error("Error fetching remarks");
      });
  }, [caseId, dispatch]);


  

  if (remarks === undefined) {
    return <Spinner />
  }
  if (remarks.length === 0) {
    return (
        <>
        <CounsellorHeader />
        <p> Sorry! We have no current case remarks! </p>
        </>
    )
  }
  

  return (
    <>
      <CounsellorHeader/>
      <h1>Case Remarks</h1>
      <table style={{ width:'100%', borderCollapse:'collapse' }}>
      <thead style={{ backgroundColor: "#f0f0f0", textAlign: "center", padding: "20px" }}>
        <tr>
          <th>Remark ID</th>
        </tr>
      </thead>
      <tbody>
        {remarks.map((remark) => (
          <tr key={remark._id}>
            <td>{remark._id}</td> 
          </tr>
        ))}
      </tbody>
    </table>
        
      
    </>
  )
}

export default ViewRemarks