import { FaSignOutAlt} from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logoutCounsellor } from '../../features/counsellors/counsellorSlice' 
import '../../index.css'

function CounsellorHeader() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onLogout = () => {
    dispatch(logoutCounsellor())
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
export default CounsellorHeader