import { FaSignOutAlt} from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logoutCase } from '../../features/casee/caseSlice' 
import '../../index.css'

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
        <ul>
        <li>
            <button className='btn btn-reverse' onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </li>
        </ul>
    </nav>
  )
}
export default CaseHeader