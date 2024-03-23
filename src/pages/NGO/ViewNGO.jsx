import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { getNGO } from '../../features/ngos/ngoSlice'
import { useParams} from 'react-router-dom'
import Spinner from '../../components/Spinner'
import { Navbar } from '../../components/Navbar'


function ViewNGO() {
  
  const { ngo } = useSelector((state) => state.ngos)

  const dispatch = useDispatch()
  const { ngoId } = useParams()

  useEffect(() => {
    dispatch(getNGO(ngoId)).unwrap().catch(toast.error)
  }, [ngoId, dispatch])


  if (!ngo) {
    return <Spinner />
  }

  return (
    <>
    <Navbar />
    <div>
      <header>
        <h2>
          NGO ID: {ngo._id}
        </h2>
        <h3>Name: {ngo.name}</h3>
        <h3>Location: {ngo.location}</h3>
        <h3>Services: {ngo.services}</h3>
        <h3>Phone. No.: {ngo.phoneNo}</h3>
        {ngo.employeeCount && <h3>Employee Count: {ngo.employeeCount}</h3>}
        {ngo.website && <h3>Website: {ngo.website}</h3>}
        {ngo.emailNGO && <h3>E-mail Id: {ngo.emailNGO}</h3>}
        {ngo.image && <div><h3>Image:</h3><img src={ngo.image} alt="NGO Image" /></div>}
        <hr />
        
      </header>
      
    </div>
    </>
  )
}

export default ViewNGO