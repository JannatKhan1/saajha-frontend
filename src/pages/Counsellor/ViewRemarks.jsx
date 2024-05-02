import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import Spinner from '../../components/Spinner'
import CounsellorHeader from '../../components/Counsellor/CounsellorHeader'
import { getRemarks } from '../../features/remarks/remarkSlice'
import { toast } from 'react-toastify'
import '../../indext.css'


function ViewRemarks() {
  const { caseId } = useParams()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRemarks(caseId))
      .catch((error) => {
        toast.error("Error fetching remarks");
      });
  }, [caseId, dispatch]);


  
  const { remarks } = useSelector((state) => state.remarks)

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
          <th>Developmental History</th>
          <th>Present Complaints</th>
          <th>Advice</th>
          <th>Previous Diagnosis</th>
          <th>Current Diagnosis</th>
          <th>Clinical Observation</th>
          <th> SuggestedInvestigationType</th>
          <th>Diagnostic Test</th>
          <th>Test Results</th>
          <th> Report</th>
          <th>Suggestions For Further Investigation</th>
        </tr>
      </thead>
      <tbody>
        {remarks.map((remark) => (
          <tr key={remark._id}>
            <td>{remark._id}</td>
            <td>{remark.developmentalHistory}</td>  
            <td>{remark.presentComplaints}</td> 
            <td>{remark.advice}</td> 
            <td>{remark.previousDiagnosis}</td> 
            <td>{remark.currentDiagnosis}</td> 
            <td>{remark.clinicalObservation}</td> 
            <td>{remark.suggestedInvestigationType}</td> 
            <td>{remark.diagnosticTest}</td> 
            <td>{remark.testResults}</td> 
            <td>{remark.report}</td> 
            <td>{remark.SuggestionsForFurtherInvestigation}</td> 
          </tr>
        ))}
      </tbody>
    </table>
        
      
    </>
  )
}

export default ViewRemarks

