import { useSelector } from 'react-redux'
import Spinner from '../../components/Spinner'
import { Navbar } from '../../components/Navbar'


function ViewCounsellor() {
  
  const { counsellor } = useSelector((state) => state.counsellors)

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