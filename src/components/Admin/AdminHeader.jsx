import { FaSignOutAlt} from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logoutAdmin } from '../../features/admins/adminSlice'
import '../../index.css'
import '../../indexs.css'

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
            <button className='logout' onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
    </nav>
  )
}
export default AdminHeader