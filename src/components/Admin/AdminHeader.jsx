import { FaSignOutAlt} from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logoutAdmin } from '../../features/admins/adminSlice'
//Version 3
import '../../index.css'

function AdminHeader() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onLogout = () => {
    dispatch(logoutAdmin())
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
export default AdminHeader