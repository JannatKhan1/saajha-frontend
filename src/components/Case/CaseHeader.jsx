import { FaSignOutAlt} from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logoutCase } from '../../features/casee/caseSlice' 
import '../../index.css'
import '../../indexs.css'

function CaseHeader() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onLogout = () => {
    dispatch(logoutCase())
    navigate('/')
  }
 
  return (
    <nav>
        <Link to='/' className='nav-title'>
            Saajha
        </Link>
            <button className='logout' onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
    </nav>
  )
}
export default CaseHeader